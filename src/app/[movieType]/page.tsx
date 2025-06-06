// sever side
import Link from "next/link";
import Navigation from "@/components/movie_components/Navigation";
import { Footer } from "@/components/movie_components/Footer";
import Cards from "@/components/movie_components/Cards";

const MovieType = async ({ params }: { params: { movieType: string } }) => {
  console.log("params", await params.movieType);

  const url = await params.movieType;
  const baseUrl = "https://api.themoviedb.org/3/movie";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

  const responsePopular = await fetch(
    `${baseUrl}/${url}?language=en-US&page=1`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await responsePopular.json();

  // console.log("data", data);

  return (
    <div>
      <Navigation />

      <div className="max-w-[1600px] m-auto py-5 flex flex-col gap-11 mt-10">
        <div className="flex relative">
          <div className="flex items-center">
            <h1 className="font-semibold text-4xl mb-12">{url}</h1>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {data?.results?.map((movie) => {
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
      </div>

      <Footer />
    </div>
  );
};

export default MovieType;
