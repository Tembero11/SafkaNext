import styles from "./css/Navbar.module.css";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Safka.<br />Online</h1>
    </div>
  );
}