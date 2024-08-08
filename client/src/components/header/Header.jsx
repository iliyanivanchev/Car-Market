import styles from "./Header.module.css";

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className={styles["nav"]}>
                <Link className={styles["active"]} to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <div className={styles["guest"]}>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div className={styles["profile"]}>
                    {/* <p>Welcome username</p> */}
                    <Link to="/car-create">Create Listing</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div className={styles["profile"]}>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </nav>
        </header>
    );
}