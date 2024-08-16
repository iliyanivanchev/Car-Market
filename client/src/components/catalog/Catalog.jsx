import styles from "./Catalog.module.css";

import SingleCar from "./single-car/SingleCar";
import { useGetCars } from "../../hooks/useCars";
import { Link } from "react-router-dom";

export default function Catalog() {
    const [cars] = useGetCars()

    return (
        <section className={styles["car-listings"]}>
            <h1>Car Listings</h1>
            <div className={styles["listings"]}>
                {
                    (cars.length > 0)
                        ? cars.map(car => <SingleCar key={car._id} car={car} />)
                        : <p className={styles["no-cars"]}>No cars in database.</p>
                }
            </div>
            <div className={styles["btn-section"]}>
                <Link to="/" className={styles["button"]}>Back to Home</Link>
            </div>
        </section>
    );
}