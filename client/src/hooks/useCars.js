import { useEffect, useState } from "react";
import { getAll } from "../api/car-api";

export function useGetCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async function getCars() {
            try {
                const carsResult = await getAll();
                
                setCars(carsResult)
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return [cars];
}