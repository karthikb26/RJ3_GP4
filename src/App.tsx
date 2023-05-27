import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationMenu from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Main.css'
import ViewMovie from './pages/ViewMovie';
import Home from './pages/Home';



function App() {
    

  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view_movie/:id" element={<ViewMovie  />} />
      </Routes>
          
    </div>
  );
}

export default App;



   {/* <Routes>
        <Route path="/" element={<MoviesInTheatre />} />
          <Route path="/comming_soon" element={<CommingSoon />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/top_rated_indian" element={<TopRatedIndian />} />
          <Route path="/top_rated_movies" element={<TopRatedMovies />} />
          <Route path="/movies/:id" element={<TopRatedMovies />} />
      </Routes> */}