"use client";
import { useState, useEffect } from "react";
import Navigation from "@/components/movie_components/Navigation";
import { Footer } from "@/components/movie_components/Footer";
import Feature from "@/components/movie_components/Feature";
import Cards from "@/components/movie_components/Cards";
import Detail from "@/components/movie_components/Detail";
import Link from "next/link";
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
  const [popularMovies, setPopularMovies] = useState<MovieResponse>({
    results: [],
  });
  const [upcomingMovies, setUpcominMovies] = useState<MovieResponse>({
    results: [],
  });
  const [topRatedMovies, setTopRatedMovies] = useState<MovieResponse>({
    results: [],
  });
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MovieResponse>({
    results: [],
  });
  const [searchValue, setSearchValue] = useState("");
  const baseUrl = "https://api.themoviedb.org/3/movie";
  // client side
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
        setUpcominMovies(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/top_rated?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setTopRatedMovies(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/now_playing?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setNowPlayingMovies(data);
      });
  }, []);
  // console.log("first", popularMovies.results.slice(0, 5));

  return (
    <div>
      <Navigation />

      <Link href="/Detail">
        <div className="flex pt-6 overflow-x-scroll">
          {nowPlayingMovies.results?.slice(0, 10).map((banner) => {
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
      </Link>

      <div className="max-w-[1600px] m-auto py-5 flex flex-col gap-11 mt-10">
        <section>
          <div className="flex relative">
            <div className="flex items-center">
              <h1 className="font-semibold text-4xl mb-12">Popular</h1>

              <Link href="/popular">
                <div className="flex justify-center items-center w-[120px] h-[20px] absolute right-[5px] rounded-[20px]  hover:bg-gray-200">
                  <button className="text-[18px] font-medium">See more</button>
                  <img
                    src="/movie-web-img/arrow-right.svg"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-5">
            {popularMovies?.results.slice(0, 10).map((movie) => {
              return (
                <Cards
                  key={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                  image={movie.poster_path}
                  backdrop_path={movie.poster_path}
                />
              );
            })}
          </div>
          <div className="flex relative">
            <div className="flex items-center">
              <h1 className="font-semibold text-4xl mb-12 mt-15">Upcoming</h1>
              <Link href="/upcoming">
                <div className="flex justify-center items-center w-[120px] h-[20px] absolute right-[5px] rounded-[20px]  hover:bg-gray-200">
                  <button className="text-[18px] font-medium">See more</button>
                  <img
                    src="/movie-web-img/arrow-right.svg"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </Link>{" "}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-5">
            {upcomingMovies?.results.slice(0, 10).map((movie) => {
              return (
                <Cards
                  key={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                  image={movie.poster_path}
                />
              );
            })}
          </div>
          <div className="flex relative">
            <div className="flex items-center">
              <h1 className="font-semibold text-4xl mb-12 mt-15">Top Rated</h1>
              <Link href="/top_rated">
                <div className="flex justify-center items-center w-[120px] h-[20px] absolute right-[5px] rounded-[20px]  hover:bg-gray-200">
                  <button className="text-[18px] font-medium">See more</button>
                  <img
                    src="/movie-web-img/arrow-right.svg"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </Link>{" "}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-5">
            {topRatedMovies?.results.slice(0, 10).map((movie) => {
              return (
                <Cards
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
