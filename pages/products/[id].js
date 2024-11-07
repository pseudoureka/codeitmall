import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Product() {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { id } = router.query;

  const getProduct = async (targetId) => {
    const res = await axios.get(`/products/${targetId}`);
    console.log(res);
    const nextProduct = res.data;
    setProduct(nextProduct);
  };

  useEffect(() => {
    if (!id) return;

    getProduct(id);
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.name} />
    </div>
  );
}
