import styles from "./CarDetails.module.css";

import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts";

import { useGetOne } from "../../hooks/useCars";


export default function CarDetails() {
    const { userId } = useContext(AuthContext);
    const { carId } = useParams();
    const [car] = useGetOne(carId);

    const isOwner = userId === car._ownerId;

    return (
        <section className={styles["listing-details"]}>
            <h1>Details</h1>
            <div className={styles["details-info"]}>
                <img src={car.imageUrl} />
                <hr />
                <ul className={styles["listing-props"]}>
                    <li><span>Brand:</span>{car.brand}</li>
                    <li><span>Model:</span>{car.model}</li>
                    <li><span>Year:</span>{car.year}</li>
                    <li><span>Price:</span>{car.price}$</li>
                </ul>

                <p className={styles["description-para"]}>{car.description}</p>

                {isOwner && (
                    <div className={styles["listings-buttons"]}>
                        <Link to={`/car-edit/${carId}`} className={styles["button-list"]}>Edit</Link>
                        <Link to={`/car-delete/${carId}`} className={styles["button-list"]}>Delete</Link>
                    </div>
                )}
            </div>
        </section>
    );
}