import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <nav className="nav">
            <Link className="active" to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <div id="profile">
                <Link>Welcome username</Link>
                <Link to="/car-create">Create Listing</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </nav>
    </header>
    );
}