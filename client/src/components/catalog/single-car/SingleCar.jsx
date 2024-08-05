import { Link } from "react-router-dom";

export default function SingleCar() {
    return (
        <div className="listing">
            <div className="preview">
                <img src="/images/audia3.jpg" />
            </div>
            <h2>Audi A3</h2>
            <div className="info">
                <div className="data-info">
                    <h3>Year: 2018</h3>
                    <h3>Price: 25000 $</h3>
                </div>
                <div className="data-buttons">
                    <Link to="/car-details" className="button-carDetails">Details</Link>
                </div>
            </div>
        </div>
    );
}