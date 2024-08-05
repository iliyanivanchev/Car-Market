import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Tube</h1>
                <img className="hero" src="/images/car-logo.webp" alt="carIntro" />
                <h2>To see all the listings click the link below:</h2>
                <div>
                    <Link to="/catalog" className="button">Listings</Link>
                </div>
            </div>
        </section>
    );
}