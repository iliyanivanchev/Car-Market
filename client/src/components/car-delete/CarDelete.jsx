import styles from "./CarDelete.module.css";

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { remove } from "../../api/car-api";
import { useGetOne } from "../../hooks/useCars";

export default function CarDelete() {
    const { carId } = useParams();
    const [car] = useGetOne(carId);
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
        <section className={styles["listing-details"]}>
            <div className={styles["listing"]}>
                <div className={styles["preview"]}>
                    <img className={styles["preview-img"]} src={car.imageUrl} />
                </div>
                <h2 className={styles["listing-h2"]}>{car.brand} {car.model}</h2>
                <div>
                    <div className="data-info">
                        <h3 className={styles["data-info-h3"]}>Year: {car.year}</h3>
                        <h3 className={styles["data-info-h3"]}>Price: {car.price} $</h3>
                    </div>
                </div>
            </div>
            <h2 className={styles["container-P"]}>Are you sure you wont to delete this listing?</h2>
            <div className={styles["btn-section"]}>
                <button className={styles["confirm-btn"]} onClick={deleteHandler}>Confirm</button>
                <Link to={`/car-details/${carId}`} className={styles["cancel-btn"]}>Cancel</Link>
            </div>
        </section>
    );
}