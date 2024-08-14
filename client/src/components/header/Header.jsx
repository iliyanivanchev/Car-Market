import styles from "./Header.module.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContexts";

export default function Header() {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <header>
            <nav className={styles["nav"]}>
                <Link className={styles["active"]} to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact-us">Contact Us</Link>
                {isAuthenticated
                    ? (<div className={styles["profile"]}>
                        {/* <p>Welcome username</p> */}
                        <Link to="/car-create">Create Listing</Link>
                        <Link to="/logout">Logout</Link>
                    </div>)
                    : (<div className={styles["guest"]}>
                        <Link to="/catalog">Catalog</Link>
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