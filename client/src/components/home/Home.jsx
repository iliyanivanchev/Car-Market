import styles from "./Home.module.css";

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className={styles["main"]}>
            <div className={styles["welcome-container"]}>
                <h1>Welcome to our Car Market</h1>
                <img className={styles["hero"]} src="/images/car-logo.webp" alt="carIntro" />
                <h2>To see all the listings click the link below:</h2>
                <div>
                    <Link to="/catalog" className={styles["button"]}>Listings</Link>
                </div>
            </div>
        </section>
    );
}