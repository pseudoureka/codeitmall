import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ul>
        <li>
          <Link href="/products/1">첫번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두번째 상품</Link>
        </li>
        <li>
          <Link href="/products/3">세번째 상품</Link>
        </li>
      </ul>
    </>
  );
}
