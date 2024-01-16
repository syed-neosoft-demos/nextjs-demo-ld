import Link from "next/link";
import styles from "../auth.module.css";

const Login = () => {
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
        <input type="submit" value="Login" />
      </div>
      New to app
      <Link href="/auth/signup"> Create Account</Link>
    </div>
  );
};

export default Login;
