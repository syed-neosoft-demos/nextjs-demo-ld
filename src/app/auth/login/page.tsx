"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../auth.module.css";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const route = useRouter();
  const token = "demo12345auth12345token";

  const handleLogin = () => {
    setLoader(true);
    localStorage.setItem("auth_token", token);
    const allCookies = document.cookie;
    console.log("allCookies", allCookies);
    document.cookie = `auth_token=${token}; Secure;  Path=/;`;
    route.replace("/panel/home");
  };

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
        <input type="submit" value={loader ? "Loading..." : "Login"} onClick={handleLogin} />
      </div>
      New to app
      <Link href="/auth/signup"> Create Account</Link>
    </div>
  );
};

export default Login;
