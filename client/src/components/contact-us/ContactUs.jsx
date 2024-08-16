import styles from './ContactUs.module.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { create, createMessage } from '../../api/car-api';

export default function ContactUs() {
    const [error, setError] = useState('');
    const [message, setMessage] = useState({ name: "", email: "", textarea: "" });
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setMessage(oldMessage => ({ ...oldMessage, [e.target.name]: e.target.value }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (message.name === "") {
            return setError('Car Brand can not be empty!')
        } else if (message.email === "") {
            return setError('Car Model can not be empty!')
        } else if (message.textarea === "") {
            return setError('Description can not be empty!')
        }
        try {
            const emailSend = await createMessage(message);
            console.log(emailSend);
            

            navigate("/")
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section>
            <div className={styles["container"]}>
                <form onSubmit={submitHandler}>
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
                        value={message.name}
                        onChange={changeHandler}
                    />

                    <p>Enter Your Email</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="JohnDoe@gmail.com"
                        name="email"
                        required
                        value={message.email}
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
                        value={message.textarea}
                        onChange={changeHandler}
                    />
                    {error &&
                        (
                            <span className={styles["error"]}>{error}</span>
                        )}
                    <hr className={styles["hr"]} />
                    <div className={styles["btn-section"]}>
                        {/* <Link to="#" className={styles["send"]}>Send Us <span aria-hidden="true">&rarr;</span></Link> */}
                        <input type="submit" className={styles["send"]} value="Send Us"/>
                    </div>
                </form>
            </div>
        </section>
    );
}