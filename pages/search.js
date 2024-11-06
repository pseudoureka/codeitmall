import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  const getProducts = async (query) => {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  };

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </div>
  );
}
