export default function Header() {
    return (
        <header>
        <nav className="nav">
            <a className="active" href="#">Home</a>
            <a href="#">Catalog</a>
            <div id="guest">
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
            <div id="profile">
                <a>Welcome username</a>
                <a href="#">Create Listing</a>
                <a href="#">Logout</a>
            </div>
        </nav>
    </header>
    );
}