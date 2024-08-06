import { Link } from "react-router-dom";
import styles from "./SingleCar.module.css";

export default function SingleCar({
    car,
}) {
    return (
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
                <div>
                    <Link to={`/car-details/${car._id}`} className={styles["button-carDetails"]}>Details</Link>
                </div>
            </div>
        </div>
    );
}