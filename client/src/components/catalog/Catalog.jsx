import SingleCar from "./single-car/SingleCar";

export default function Catalog() {
    return (
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div className="listings">

                {/* <!-- Display all records --> */}
                <SingleCar />

                {/* <!-- Display if there are no records --> */}
                <p className="no-cars">No cars in database.</p>
            </div>
        </section>
    );
}