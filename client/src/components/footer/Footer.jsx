import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
                <Link to="/about" className={styles["left"]}>About</Link>
                <p>&copy; All rights reserved</p>
                <Link to="/contact-us" className={styles["right"]}>Contact Us</Link>
        </footer>
    );
}