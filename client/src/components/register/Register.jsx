import { Link } from "react-router-dom";
import styles from './Register.module.css';

export default function Register() {
    return (
        <section id="register">
        <div className={styles["container"]}>
            <form id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr className={styles["hr"]}/>

                <p>Username</p>
                <input type="text" className={styles["input"]} placeholder="Enter Username" name="username" required />

                <p>Password</p>
                <input type="password" className={styles["input"]} placeholder="Enter Password" name="password" required />

                <p>Repeat Password</p>
                <input type="password" className={styles["input"]} placeholder="Repeat Password" name="repeatPass" required />
                <hr />

                <input type="submit" className={styles["registerbtn"]} value="Register" />
            </form>
            <div className={styles["signin"]}>
                <p>Already have an account?
                    <Link to="/login" className={styles["link"]}>Sign in</Link>.
                </p>
            </div>
        </div>
    </section>
    );
}