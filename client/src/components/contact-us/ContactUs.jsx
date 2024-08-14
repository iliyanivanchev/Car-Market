import styles from './ContactUs.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
    const [values, setValues] = useState({ name: "", email: "", textarea: "" });

    const changeHandler = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }))
    };

    console.log(values);


    return (
        <section>
            <div className={styles["container"]}>
                <form>
                    <h1>Contact Us</h1>
                    <p>Please enter your credentials.</p>
                    <hr className={styles["hr"]} />

                    <p>Enter Your Name</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="John Doe"
                        name="name"
                        required
                        value={values.name}
                        onChange={changeHandler}
                    />

                    <p>Enter Your Email</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="JohnDoe@gmail.com"
                        name="email"
                        required
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <p>Enter Your Message</p>
                    <textarea
                        textarea="text"
                        className={styles["input"]}
                        placeholder="Some text here ..."
                        name="textarea"
                        required
                        rows={10}
                        value={values.textarea}
                        onChange={changeHandler}
                    />
                    <hr className={styles["hr"]} />
                    <div className={styles["btn-section"]}>
                        <Link to="#" className={styles["send"]}>Send Us <span aria-hidden="true">&rarr;</span></Link>
                    </div>
                </form>
            </div>
        </section>
    );
}