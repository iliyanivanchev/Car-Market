import { Link, useNavigate } from "react-router-dom";
import styles from './Register.module.css';
import { useState } from "react";
import { register } from "../../api/auth-api";

export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "", repeatPass: "" });

    const changeHandler = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if(values.password !== values.repeatPass) {
                throw new Error("Password and Repeat Password must be the same");
            }
            const dataResult = await register(values);
            console.log(dataResult);
            
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <section>
            <div className={styles["container"]}>
                <form onSubmit={submitHandler}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr className={styles["hr"]} />

                    <p>Email</p>
                    <input
                        type="email"
                        className={styles["input"]}
                        placeholder="Enter Email"
                        name="email"
                        required
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <p>Password</p>
                    <input
                        type="password"
                        className={styles["input"]}
                        placeholder="Enter Password"
                        name="password"
                        required
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <p>Repeat Password</p>
                    <input
                        type="password"
                        className={styles["input"]}
                        placeholder="Repeat Password"
                        name="repeatPass"
                        required
                        value={values.repeatPass}
                        onChange={changeHandler}
                    />
                    <hr className={styles["hr"]}/>

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