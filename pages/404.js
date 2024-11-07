import Link from "next/link";
import styles from "@/styles/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.notFound}>
        <div className={styles.content}>
          페이지를 찾을 수 없습니다.
          <br />
          요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :)
        </div>
        <Link href={"/"}>
          <button className={styles.button} as="div">
            홈으로 이동하기
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
