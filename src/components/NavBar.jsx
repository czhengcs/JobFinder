import { Link } from "react-router-dom";
import logo from "../assets/maple.png";
import "../css/NavBar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <img src={logo} alt="logo.png" className="navbar-logo" />
            <Link to="/">JobFinder</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/saved" className="nav-link">Saved Jobs</Link>
        </div>
    </nav>
}

export default NavBar