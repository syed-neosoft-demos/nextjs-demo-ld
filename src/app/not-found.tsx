import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";

export default async function NotFound() {
  return (
    <div className={style.loader}>
      <section className={style.page_404}>
        <Image src="/images/404.png" alt="404 image" width="600" height="400" />

        <div className={style.contant_box_404}>
          <h1>404</h1>
          <h3>Look like you're lost</h3>

          <p>the page you are looking for not avaible!</p>

          <Link href="/" className={style.link_404}>
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
