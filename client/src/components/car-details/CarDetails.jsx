import { Link } from "react-router-dom";

import styles from "./CarDetails.module.css";

export default function CarDetails() {
    return (
        <section id="listing-details">
        <h1>Details</h1>
        <div className={styles["details-info"]}>
            <img src="/images/audia3.jpg" />
            <hr />
            <ul className={styles["listing-props"]}>
                <li><span>Brand:</span>Audi</li>
                <li><span>Model:</span>A3</li>
                <li><span>Year:</span>2018</li>
                <li><span>Price:</span>25000$</li>
            </ul>

            <p className={styles["description-para"]}>Some description of this car. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sunt voluptate quam nesciunt ipsa veritatis voluptas optio debitis repellat porro
                sapiente.</p>

            <div className={styles["listings-buttons"]}>
                <Link to="/car-edit" className={styles["button-list"]}>Edit</Link>
                <Link to="#" className={styles["button-list"]}>Delete</Link>
            </div>
        </div>
    </section>
    );
}