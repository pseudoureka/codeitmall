import styles from "@/styles/NotFoundPage.module.css";

const { default: Link } = require("next/link");

function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        페이지를 찾을 수 없습니다.
        <br />
        페이지가 삭제 되었거나 잘못된 경로로 접근하셨습니다.
      </div>
      <Link href={"/"}>
        <button className={styles.button}>홈으로 돌아가기</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
