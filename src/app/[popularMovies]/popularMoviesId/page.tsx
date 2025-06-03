export default async function Page({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const baseUrl = "https://api.themoviedb.org/3/movie";
  const { movieId } = await params;
  const response = await fetch(`${baseUrl}/popular?language=en-US&page=1`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return <div>{movieId}</div>;
}
