import { Metadata } from "next";
import styles from "./auth.module.css";

export const metadata: Metadata = {
  title: "auth Page",
  description: "next.js l&d app, auth login page ",
};
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.authContainer}>
      <aside className={styles.sideContent}>
        <div className={styles.heading}>
          <h3>NextJS L&D Demo App</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </aside>
      <main className={styles.mainContent}>
        {children}
        <footer className={styles.footer}>
          <div>footer</div>
        </footer>
      </main>
    </div>
  );
}
