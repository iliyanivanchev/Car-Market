import styles from './Register.module.css';

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { register } from "../../api/auth-api";
import { AuthContext } from '../../contexts/AuthContexts';

export default function Register() {
    const { changeAuthState } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [values, setValues] = useState({ email: "", password: "", repeatPass: "" });

    const changeHandler = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (values.email === "") {
            return setError('Email can not be empty!')
        } else if (values.password === "") {
            return setError('Password can not be empty!')
        }  else if (values.repeatPass === "") {
            return setError('Repeat Password can not be empty!')
        } else if (values.password !== values.repeatPass) {
            return setError('Password and Repeat Password must be the same!')
        }
        
        try {
            const {password, ...authData} = await register({
                email: values.email,
                password: values.password
            });
            
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
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
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

                    <p>Repeat Password</p>
                    <input
                        type="password"
                        className={styles["input"]}
                        placeholder="Repeat Password"
                        name="repeatPass"
                        value={values.repeatPass}
                        onChange={changeHandler}
                    />
                    {error && (
                        <p className={styles["error"]}>
                            <span>{error}</span>
                        </p>
                    )}
                    <hr className={styles["hr"]} />

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