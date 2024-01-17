"use client";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import styles from "../auth.module.css";

const Login = () => {
  const route = useRouter();
  const token = "demo12345auth12345token";
  const handleLogin = () => {
    // localStorage.setItem("auth_token", token);
    console.log("hello");
    route.replace("/panel/home");
  };

  // const handleSetCookies = () => {
  //   cookies().set("auth_token", token);
  //   // // or
  //   // cookies().set("name", "lee", { secure: true });
  //   // // or
  //   // cookies().set({
  //   //   name: "name",
  //   //   value: "lee",
  //   //   httpOnly: true,
  //   //   path: "/",
  //   // });
  // };
  return (
    <div className={styles.loginCard}>
      <h5>Login to your account</h5>
      <div className={styles.authInput}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" />
      </div>
      <div className={styles.authInput}>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter password" />
      </div>
      <div className={styles.authInput}>
        <input type="submit" value="Login" onClick={handleLogin} />
      </div>
      New to app
      <Link href="/auth/signup"> Create Account</Link>
    </div>
  );
};

export default Login;
