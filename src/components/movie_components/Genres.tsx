"use client";

import { useState, useEffect } from "react";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Genres = () => {
  const baseUrl = "https://api.themoviedb.org/3/movie";

  const [genre, setGenre] = useState();
  const [genreMovies, setGenreMovies] = useState();

  useEffect(() => {
    fetch(`${baseUrl}/genre/movie/list?language=en`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setGenre(data);
      });
  }, []);

  //   console.log("genre", genre);

  return <div>Genre</div>;
};

export default Genres;
