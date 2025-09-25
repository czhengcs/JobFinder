import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">JobFinder</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/saved" className="nav-link">Saved Jobs</Link>
        </div>
    </nav>
}

export default NavBar