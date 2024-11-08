import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import SizeReviewList from '@/components/SizeReviewList';
import Image from 'next/image';
import styles from '@/styles/Product.module.css';

export default function Product() {
  const [product, setProduct] = useState();
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getProduct = async (targetId) => {
    const res = await axios.get(`/products/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  };

  const getSizeReviews = async (targetId) => {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  };

  useEffect(() => {
    if (!id) return;

    getProduct(id);
    getSizeReviews(id);
  }, [id]);

  if (!product) return null;

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
