import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Codeitmall</h1>
      <SearchForm />
      <Link href={"/products/1"}>
        <p>첫번째 상품</p>
      </Link>
      <Link href={"/products/2"}>
        <p>두번째 상품</p>
      </Link>
      <Link href={"/products/3"}>
        <p>세번째 상품</p>
      </Link>
    </>
  );
}
