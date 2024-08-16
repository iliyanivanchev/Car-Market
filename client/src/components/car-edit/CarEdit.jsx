import styles from "./CarEdit.module.css";

import { Link, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useGetOne } from "../../hooks/useCars";
import { edit } from "../../api/car-api";

const initialValues = {
    brand: "",
    model: "",
    description: "",
    year: "",
    imageUrl: "",
    price: ""
}

export default function CarEdit() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car] = useGetOne(carId);

    const [values, setValues] = useState(Object.assign(initialValues, car));

    useEffect(() => {
        setValues(initialValues)
    }, [car]);

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

            await edit(carId, values);
            setValues({
                brand: "",
                model: "",
                description: "",
                year: "",
                imageUrl: "",
                price: ""
            })
            navigate(`/car-details/${carId}`);
        } catch (error) {
            setError("You need to be logged in to make changes!");
        }
    }

    return (
        <section id="edit-listing">
            <div className={styles["container"]}>

                <form id="edit-form" onSubmit={submitHandler}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit a car listing.</p>
                    <hr />

                    <p>Car Brand</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Car Brand"
                        name="brand"
                        value={values.brand}
                        onChange={changeHandler}
                    />

                    <p>Car Model</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Car Model"
                        name="model"
                        value={values.model}
                        onChange={changeHandler}
                    />

                    <p>Description</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Description"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                    />

                    <p>Car Year</p>
                    <input
                        type="number"
                        className={styles["input"]}
                        placeholder="Enter Car Year"
                        name="year"
                        value={values.year}
                        onChange={changeHandler}
                    />

                    <p>Car Image</p>
                    <input
                        type="text"
                        className={styles["input"]}
                        placeholder="Enter Car Image"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <p>Car Price</p>
                    <input
                        type="number"
                        className={styles["input"]}
                        placeholder="Enter Car Price"
                        name="price"
                        value={values.price}
                        onChange={changeHandler}
                    />
                    {error && (
                        <p className={styles["error"]}>
                            <span>{error}</span>
                        </p>
                    )}
                    <hr />
                    <div className={styles["btn-section"]}>
                        <input type="submit" className={styles["edit-btn"]} value="Edit Listing" />
                        <Link to={`/car-details/${carId}`} className={styles["cancel-btn"]}>Cancel</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}