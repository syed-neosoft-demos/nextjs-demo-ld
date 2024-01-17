"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../components/shared/loader";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/login");
  }, []);
  return (
    <div className="m-10 flex justify-center items-center flex-col">
      <Loader />
      <h2 className="text-3xl text-green-500 font-semibold mt-5">Loading...</h2>
    </div>
  );
}
