import { useEffect, useState } from "react";

import { get } from "../../api/requester";

import SingleCar from "./single-car/SingleCar";

const url = 'http://localhost:3030/data/cars'

export default function Catalog() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async function getCars() {
            try {
                const carsResult = await get(url);
                
                setCars(carsResult)
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return (
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div className="listings">
                {
                    (cars.length > 0)
                        ? cars.map(car => <SingleCar key={car._id} car={car} />)
                        : <p className="no-cars">No cars in database.</p>
                }
            </div>
        </section>
    );
}