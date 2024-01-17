"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/login");
  }, []);
  return (
    <div className={styles.loader}>
      <h5>Loading...</h5>
    </div>
  );
}
