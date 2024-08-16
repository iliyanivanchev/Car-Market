import styles from "./CarDelete.module.css";

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { remove } from "../../api/car-api";

export default function CarDelete() {
    const { carId } = useParams();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const deleteHandler = async () => {
        try {
            await remove(carId);

            navigate("/catalog")
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className={styles["container"]}>
            <h2 className={styles["container-P"]}>Are you sure you wont to delete this listing?</h2>
            {error &&
                (
                    <span className={styles["error"]}>{error}</span>
                )}
            <hr className={styles["hr"]} />
            <div className={styles["btn-section"]}>
                <button className={styles["confirm-btn"]} onClick={deleteHandler}>Confirm</button>
                <Link to={`/car-details/${carId}`} className={styles["cancel-btn"]}>Cancel</Link>
            </div>
        </div>
    );
}