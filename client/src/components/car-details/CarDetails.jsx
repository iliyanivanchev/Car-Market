import styles from "./CarDetails.module.css";

import { Link, useParams } from "react-router-dom";

import { useGetOne } from "../../hooks/useCars";


export default function CarDetails() {
    const { carId } = useParams();
    const [car] = useGetOne(carId);

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

                <div className={styles["listings-buttons"]}>
                    <Link to={`/car-edit/${car._id}`} className={styles["button-list"]}>Edit</Link>
                    <Link to="#" className={styles["button-list"]}>Delete</Link>
                </div>
            </div>
        </section>
    );
}