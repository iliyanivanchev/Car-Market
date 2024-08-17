import styles from "./LatestCars.module.css";

import { Link } from "react-router-dom";

export default function LatestCars({ latestCar }) {

    return (
        <div className={styles["listing"]}>
            <div className={styles["preview"]}>
                <img className={styles["preview-img"]} src={latestCar.imageUrl} />
            </div>
            <h2 className={styles["listing-h2"]}>{latestCar.brand} {latestCar.model}</h2>
            <div>
                <div className="data-info">
                    <h3 className={styles["data-info-h3"]}>Year: {latestCar.year}</h3>
                    <h3 className={styles["data-info-h3"]}>Price: {latestCar.price} $</h3>
                </div>
                <div>
                    <Link to={`/car-details/${latestCar._id}`} className={styles["button-carDetails"]}>Details</Link>
                </div>
            </div>
        </div>
    );
}