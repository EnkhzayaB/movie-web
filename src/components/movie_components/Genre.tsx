"use client";

import { Key } from "lucide-react";

const genres: string[] = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];
function Genre() {
  const handleClick = (genre: string) => {};
  return (
    <div className="flex relative items-center justify-center gap-2 py-2 pl-4 pr-4 w-[5%] rounded-lg border border-[#E4E4E7] mr-3">
      <img src="/movie-web-img/genre-logo.svg" alt="genre" />
      <input
        className="text-[16px] not-italic font-bold text-black w-[90px] outline-white"
        placeholder="Genre"
        type="text"
      />
      <div className="absolute top-[50px] left-0 bg-white border border-gray-300 rounded-lg shadow-md z-10 w-[600px]">
        <div className="p-2">
          <h2 className="font-bold mb-1 text-2xl mt-3 ml-2.5">Genres</h2>
          <p className="text-[16px] mb-2 font-normal ml-2.5">
            See lists of movies by genre
          </p>

          <div className="border-t border border-[#e3e1e1] flex justify-center w-[98%] mt-[20px]"></div>

          <div className="grid grid-cols-4 gap-1 max-h-[200px] overflow-y-auto mt-5 ml-[6px]">
            {genres.map((genre, index) => (
              <div className="flex rounded-3xl border border-[#E4E4E7] justify-center hover:bg-gray-300">
                <button
                  key={index}
                  onClick={() => handleClick(genre)}
                  className="text-sm font-semibold bg-white rounded-3xl px-2 py-1 hover:bg-gray-300"
                >
                  {genre}
                </button>
                <img src="/movie-web-img/arrow-right.svg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Genre;
