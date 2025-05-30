"use client";
import { useState, useEffect } from "react";
import Navigation from "@/components/movie_components/Navigation";
import Popular from "@/components/movie_components/Popular";
import Upcoming from "@/components/movie_components/Upcoming";
import { Footer } from "@/components/movie_components/Footer";
import Feature from "@/components/movie_components/Feature";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

type MovieResponse = {
  results: Movie[];
};

const Home = () => {
  const [PopularMovies, setPopularMovies] = useState<MovieResponse>({
    results: [],
  });
  const [UpcomingMovies, setUpcomingMovies] = useState<MovieResponse>({
    results: [],
  });
  const [recommendationsMovies, setRecommendationsMovies] =
    useState<MovieResponse>({
      results: [],
    });
  const [searchValue, setSearchValue] = useState("");
  const baseUrl = "https://api.themoviedb.org/3/movie";

  useEffect(() => {
    fetch(`${baseUrl}/popular?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/upcoming?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUpcomingMovies(data);
      });
  }, []);

  console.log("first", PopularMovies.results.slice(0, 5));
  return (
    <div>
      <Navigation />

      <div className="flex pt-6 overflow-x-scroll">
        {PopularMovies.results.slice(0, 5).map((banner) => {
          return (
            <Feature
              key={banner.id}
              title={banner.title}
              summary={banner.overview}
              image={banner.backdrop_path}
              rate={banner.vote_average}
            />
          );
        })}
      </div>

      <div className="max-w-[1600px] m-auto py-5 flex flex-col gap-11">
        <section>
          <h1 className="font-black text-2xl mb-4 text-black ">Popular</h1>
          <div className="grid grid-cols-5 gap-5">
            {PopularMovies?.results?.map((movie) => {
              return (
                <Popular
                  key={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                  image={movie.poster_path}
                  backdrop_path={movie.poster_path}
                />
              );
            })}
          </div>
          <h1 className="font-black text-2xl mt-8 text-black">Upcoming</h1>
          <div className="grid grid-cols-5 gap-5">
            {UpcomingMovies?.results?.map((movie) => {
              return (
                <Upcoming
                  key={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                  image={movie.poster_path}
                />
              );
            })}
          </div>
        </section>
      </div>

      <div className="flex">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
