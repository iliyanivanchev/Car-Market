import styles from './ContactUs.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMessage } from '../../api/car-api';

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
            return setError('Name can not be empty!')
        } else if (message.email === "") {
            return setError('Email can not be empty!')
        } else if (message.textarea === "") {
            return setError('Message can not be empty!')
        }
        try {
            const emailSend = await createMessage(message);            

            navigate("/")
        } catch (error) {
            setError("You need to be logged in to send Us a message!");
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
                        value={message.name}
                        onChange={changeHandler}
                    />

                    <p>Enter Your Email</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="JohnDoe@gmail.com"
                        name="email"
                        value={message.email}
                        onChange={changeHandler}
                    />

                    <p>Enter Your Message</p>
                    <textarea
                        textarea="text"
                        className={styles["input"]}
                        placeholder="Some text here ..."
                        name="textarea"
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
                        <input type="submit" className={styles["send"]} value="Send Us"/>
                    </div>
                </form>
            </div>
        </section>
    );
}