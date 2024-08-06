import { useEffect, useState } from "react";
import { getAll, getOne } from "../api/car-api";

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

export function useGetOne(carId) {
    const [car, setCar] = useState({});

    useEffect(() => {
        (async function getCar() {
            try {
                const carResult = await getOne(carId);

                setCar(carResult)
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return [car];
}