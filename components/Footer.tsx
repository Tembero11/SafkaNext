import styles from "./css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <h3 className={styles.header}>Resources</h3>
        <ul className={styles.links}>
            <li><a className={styles.link} href="https://github.com/Tembero11/SafkaArchiver" target="_blank" rel="noreferrer">Github <span className="material-symbols-outlined">open_in_new</span></a></li>
            <li><a className={styles.link} href="https://api.safka.online/v1/menu" target="_blank" rel="noreferrer">Safka API <span className="material-symbols-outlined">open_in_new</span></a></li>
        </ul>
    </footer>
  );
}