import styles from "./CarCreate.module.css";

import { useState } from "react";
import { create } from "../../api/car-api";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
    brand: "",
    model: "",
    description: "",
    year: "",
    imageUrl: "",
    price: "",
}

export default function CarCreate() {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (values.brand === "") {
            return setError('Car Brand can not be empty!')
        } else if (values.model === "") {
            return setError('Car Model can not be empty!')
        } else if (values.description === "") {
            return setError('Description can not be empty!')
        } else if (values.year === "") {
            return setError('Car Year can not be empty!')
        } else if (values.imageUrl === "") {
            return setError('Car Image can not be empty!')
        } else if (values.price === "") {
            return setError('Car Price can not be empty!')
        }
        try {
            const carData = await create(values);


            navigate("/catalog")
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section>
            <div className={styles["container"]}>
                <form onSubmit={submitHandler}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr className={styles["hr"]} />

                    <p>Car Brand</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Car Brand"
                        name="brand"
                        values=""
                        onChange={changeHandler}
                    />

                    <p>Car Model</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Car Model"
                        name="model"
                        values=""
                        onChange={changeHandler}
                    />

                    <p>Description</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Description"
                        name="description"
                        values=""
                        onChange={changeHandler}
                    />

                    <p>Car Year</p>
                    <input
                        type="number"
                        className={styles["input"]}
                        placeholder="Enter Car Year"
                        name="year"
                        values=""
                        onChange={changeHandler}
                    />

                    <p>Car Image</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Car Image"
                        name="imageUrl"
                        values=""
                        onChange={changeHandler}
                    />

                    <p>Car Price</p>
                    <input
                        type="number"
                        className={styles["input"]}
                        placeholder="Enter Car Price"
                        name="price"
                        values=""
                        onChange={changeHandler}
                    />
                    {error && (
                        <p className={styles["error"]}>
                            <span>{error}</span>
                        </p>
                    )}
                    <hr className={styles["hr"]} />
                    <div className={styles["btn-section"]}>
                        <input type="submit" className={styles["createbtn"]} value="Create Car Listing" />
                        <Link to={"/"} className={styles["cancel-btn"]}>Cancel</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}