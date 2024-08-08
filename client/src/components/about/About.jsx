import { Link } from "react-router-dom";
import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles["container"]}>
            <p className={styles["container-P"]}>About Us</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, perspiciatis?</h1>
            <p className={styles["container-p"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, perspiciatis?</p>
            <hr className={styles["hr"]} />
            <div className={styles["btn-section"]}>
                <Link to="/" className={styles["homebtn"]}>Go back home</Link>
            </div>
        </div>
    );
}