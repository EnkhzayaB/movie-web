// sever side
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
  console.log("data", data);
  return <div>movie types: {url} </div>;
};

export default MovieType;
