import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import SizeReviewList from '@/components/SizeReviewList';
import Image from 'next/image';
import styles from '@/styles/Product.module.css';

export async function getStaticPaths() {
  const res = await axios.get('/products');
  const products = res.data.results;
  const paths = products.map((product) => ({
    params: {
      id: String(product.id),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const productId = context.params['id'];
  let product;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getSizeReviews = async (targetId) => {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  };

  useEffect(() => {
    if (!id) return;

    getSizeReviews(id);
  }, [id]);

  if (!product) return <div>로딩중</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <div className={styles.image}>
        <Image fill src={product.imgUrl} alt={product.name} />
      </div>
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
