import { Link } from "react-router-dom";
import styles from './Login.module.css';

export default function Login() {
    return (
        <section id="login">
            <div className={styles["container"]}>
                <form id="login-form">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr className={styles["hr"]} />

                    <p>Username</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Username" name="username" />

                    <p>Password</p>
                    <input type="password" className={styles["input"]} placeholder="Enter Password" name="password" />
                    <hr />
                    
                    <input type="submit" className={styles["loginbtn"]} value="Login" />
                </form>
                <div className={styles["signin"]}>
                    <p>Dont have an account?
                        <Link to="/register" className={styles["link"]}>Sign up</Link>.
                    </p>
                </div>
            </div>
        </section>
    );
}