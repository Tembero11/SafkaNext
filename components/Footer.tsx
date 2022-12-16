import styles from "./css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <h3 className={styles.header}>Resources</h3>
        <ul className={styles.links}>
            <li><FooterLink href="https://api.safka.online/v1/menu">API</FooterLink></li>
            <li><FooterLink href="https://www.turkuai.fi/turun-ammatti-instituutti/opiskelijalle/ruokailu-ja-ruokalistat/ruokalista-juhannuskukkula-topseli">Data Source</FooterLink></li>
            
        </ul>
        <h3 className={styles.header}>Open Source</h3>
        <ul className={styles.links}>
          <li><FooterLink href="https://github.com/Tembero11/SafkaArchiver">API</FooterLink></li>
          <li><FooterLink href="https://github.com/Tembero11/SafkaNext">Web</FooterLink></li>
        </ul>
    </footer>
  );
}

function FooterLink(props: {href: string, children: string}) {
  return <a className={styles.link} href={props.href} target="_blank" rel="noreferrer">{props.children} <span className="material-symbols-outlined">open_in_new</span></a>
}