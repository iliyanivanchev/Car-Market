import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles["container"]}>
            <p className={styles["container-P"]}>404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className={styles["container-p"]}>Sorry, we couldn't find the page you're looking for.</p>
            <hr className={styles["hr"]}/>
            <div className={styles["btn-section"]}>
                <Link to="/" className={styles["homebtn"]}>Go back home</Link>
                <Link to="/about" className={styles["link"]}>Contact support<span aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    );
}