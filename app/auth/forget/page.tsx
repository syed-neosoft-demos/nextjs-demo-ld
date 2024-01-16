import styles from "../auth.module.css";

const ForgetPassword = () => {
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
    </div>
  );
};

export default ForgetPassword;
