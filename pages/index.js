import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';

export async function getStaticProps() {
  const res = await axios.get(`/products`);
  const products = res.data.results;

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
