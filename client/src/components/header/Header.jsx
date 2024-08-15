import styles from "./Header.module.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContexts";

export default function Header() {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <header>
            <nav className={styles["nav"]}>
                <div>
                    <Link to="/" className={styles["active"]}>Home</Link>
                    <Link to="/catalog">Catalog</Link>
                </div>
                <div>
                    <Link to="/about" className={styles["center"]}>About</Link>
                    <Link to="/contact-us" className={styles["center"]}>Contact Us</Link>
                </div>
                {isAuthenticated
                    ? (<div className={styles["profile"]}>
                        <Link to="/car-create">Create Listing</Link>
                        <Link to="/logout">Logout</Link>
                    </div>)
                    : (<div className={styles["guest"]}>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>)
                }
                {email
                    ? (<div>
                        <p className={styles["email"]}>{email}</p>
                    </div>)
                    : ""
                }
            </nav>
        </header>
    );
}