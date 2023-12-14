import { Route, Routes } from "react-router-dom";
import PageHome from "../../pages/PageHome";
// import PageMovieDetails from "../../pages/PageMovieDetails";
import PageSearchMovies from "../../pages/PageSearchMovies";
// import Cast from "../Cast";
import Navigation from "../Navigation/Navigation";
// import Reviews from "../Reviews/Reviews";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<PageHome />} />
        <Route path="/movies" element={<PageSearchMovies />} />
        {/* <Route path="/movies/:movieId" element={<PageMovieDetails />}>
          <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
