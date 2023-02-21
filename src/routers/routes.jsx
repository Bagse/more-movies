import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/more-movies" element={<LandingPage />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}