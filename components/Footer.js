
import styles from "./Footer.module.css";

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <p>© {new Date().getFullYear()} Seaside Landscape Solutions. All rights reserved.</p>
        <p>Licensed • Insured • Panama City & surrounding areas</p>
      </div>
    </footer>
  );
}
