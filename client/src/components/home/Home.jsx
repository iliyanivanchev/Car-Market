export default function Home() {
    return (
        <section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Tube</h1>
                <img className="hero" src="/images/car-logo.webp" alt="carIntro" />
                <h2>To see all the listings click the link below:</h2>
                <div>
                    <a href="#" className="button">Listings</a>
                </div>
            </div>
        </section>
    );
}