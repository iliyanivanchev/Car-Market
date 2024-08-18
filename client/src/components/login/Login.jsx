import styles from './Login.module.css';

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { login } from '../../api/auth-api';
import { AuthContext } from '../../contexts/AuthContexts';


export default function Login() {
    const { changeAuthState } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [values, setValues] = useState({ email: "", password: "" });

    const changeHandler = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (values.email === "") {
            return setError('Email can not be empty!')
        } else if (values.password === "") {
            return setError('Password can not be empty!')
        }
        try {
            const { password, ...authData } = await login(values);
            changeAuthState(authData);

            navigate("/")
        } catch (error) {
            setError(error.message);
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
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <p>Password</p>
                    <input
                        type="password"
                        className={styles["input"]}
                        placeholder="Enter Password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    {error && (
                        <p className={styles["error"]}>
                            <span>{error}</span>
                        </p>
                    )}
                    <hr className={styles["hr"]} />

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