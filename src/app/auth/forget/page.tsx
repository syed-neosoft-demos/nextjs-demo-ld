import styles from "../auth.module.css";

const ForgetPassword = () => {
  return (
    <div className={styles.loginCard}>
      <h5>Forget your password</h5>
      <div className={styles.authInput}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" id="email" />
      </div>

      <div className={styles.authInput}>
        <input type="submit" value="Forget" />
      </div>
    </div>
  );
};

export default ForgetPassword;
