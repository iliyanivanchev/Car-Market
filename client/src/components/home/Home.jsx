import styles from "./Home.module.css";

import { Link } from "react-router-dom";

import LatestCars from "./latest-cars/LatestCars";
import { useEffect, useState } from "react";

export default function Home() {
    const [latestCars, setLatestCars] = useState([]);

    useEffect(() => {
        (async function getCars() {
            try {
                const response = await fetch(`http://localhost:3030/data/cars?sortBy=_createdOn%20desc&pageSize=4`);
                const carsResult = await response.json();

                setLatestCars(carsResult)
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);
    
    return (
        <section className={styles["main"]}>
            <div className={styles["welcome-container"]}>
                <h1>Welcome to our Car Market</h1>
                <img className={styles["hero"]} src="/images/lambo-logo.webp" alt="carIntro" />
                <div className={styles["cars-container"]}>
                    <h2>Latest Cars</h2>
                    <div className={styles["ordered-cars-container"]}>
                        {
                            (latestCars.length > 0)
                                ? latestCars.map(latestCar => <LatestCars key={latestCar._id} latestCar={latestCar} />)
                                : <p className={styles["no-cars"]}>No cars in database.</p>
                        }
                    </div>
                </div>
                <h3>To see all the listings click the link below:</h3>
                <div>
                    <Link to="/catalog" className={styles["button"]}>Listings</Link>
                </div>
            </div>
        </section>
    );
}