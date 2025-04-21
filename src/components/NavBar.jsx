import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie Mania</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <Link to="/watchlist" className="nav-link">Watchlist</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default NavBar;