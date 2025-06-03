"use client";
import Navigation from "@/components/movie_components/Navigation";
import { useEffect, useState } from "react";
import Popular from "@/components/movie_components/Popular";

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

const PopularMovies = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const baseUrl = "https://api.themoviedb.org/3/movie";
  const [popularMoviesDetail, setPopularMoviesDetail] = useState<MovieResponse>(
    {
      results: [],
    }
  );

  useEffect(() => {}, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/popular?language=en-US&page=1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setPopularMoviesDetail(data);
    } catch (e) {
      console.log(e);
    }

    return (
      <div>
        <Navigation />
        <div className="max-w-[1600px] m-auto py-5 flex flex-col gap-11 mt-10">
          <section>
            <div className="flex relative">
              <div className="flex items-center">
                <h1 className="font-semibold text-4xl mb-12">Popular</h1>
                <div className="flex justify-center items-center w-[120px] h-[20px] absolute right-[5px] rounded-[20px]  hover:bg-gray-200">
                  <button className="text-[18px] font-medium">See more</button>
                  <img
                    src="/movie-web-img/arrow-right.svg"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-5">
              {popularMoviesDetail?.results?.map((movie) => {
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
          </section>
        </div>
      </div>
    );
  };
};
export default PopularMovies;
