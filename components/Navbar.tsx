import styles from "./css/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Safka Online</h1>
    </div>
  );
}