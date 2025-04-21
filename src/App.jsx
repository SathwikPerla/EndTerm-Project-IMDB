import "./css/App.css";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;