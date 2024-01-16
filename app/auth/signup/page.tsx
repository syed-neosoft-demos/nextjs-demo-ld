import Link from "next/link";
import styles from "../auth.module.css";

const Signup = () => {
  return (
    <div className={styles.loginCard}>
      <h5>Create an account</h5>
      <div className={styles.authInput}>
        <label htmlFor="name">Full name</label>
        <input type="text" placeholder="Enter full name" id="name" />
      </div>
      <div className={styles.authInput}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter username" id="username" />
      </div>
      <div className={styles.authInput}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" id="email" />
      </div>
      <div className={styles.authInput}>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter password" id="password" />
      </div>{" "}
      <div className={styles.authInput}>
        <label htmlFor="cndPassword">Confirm Password</label>
        <input type="password" placeholder="Enter confirm password" id="cndPassword" />
      </div>
      <div className={styles.authInput}>
        <input type="submit" value="Create" />
      </div>
      Already have account?
      <Link href="/auth/login"> Login</Link>
    </div>
  );
};

export default Signup;
