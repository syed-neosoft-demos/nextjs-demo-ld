"use client";

import { Error } from "@/src/components/shared/toast";
import { loginApi } from "@/src/utils/auth-api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "../auth.module.css";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const route = useRouter();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleInput = (elem: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = elem.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleLogin = async () => {
    if (!payload.email || !payload.password) {
      return toast.custom(<Error message="please fill all required fields" />);
    }
    setLoader(true);
    const res: any = await loginApi({ username: "kminchelle", password: "0lelplR" });
    localStorage.setItem("auth_token", res?.token);
    const allCookies = document.cookie;
    console.log("allCookies", allCookies);
    document.cookie = `auth_token=${res?.token}; Secure;  Path=/;`;
    route.replace("/panel/home");
  };

  return (
    <div className={styles.loginCard}>
      <h5>Login to your account</h5>
      <div className={styles.authInput}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={payload.email}
          onChange={(el) => handleInput(el)}
        />
      </div>
      <div className={styles.authInput}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={payload.password}
          onChange={(el) => handleInput(el)}
        />
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
