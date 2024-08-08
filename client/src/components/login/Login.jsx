import styles from './Login.module.css';

import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { login } from '../../api/auth-api';


export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" });

    const changeHandler = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const dataResult = await login(values);
            if (dataResult.code === 403) {
                throw new Error(dataResult.message);
            }
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
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
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
                    <hr className={styles["hr"]}/>

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