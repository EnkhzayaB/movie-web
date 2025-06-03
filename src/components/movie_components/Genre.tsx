"use client";
import { useState } from "react";
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
  const [showGenres, setShowGenres] = useState(false);
  const handleClick = (genre: string) => {
    alert(`${genre}`);
  };
  const toggleGenres = () => {
    setShowGenres((prev) => !prev);
  };
  return (
    <div className="relative">
      <div className="flex items-center gap-2 py-2 pl-4 pr-4 w-[120px] rounded-lg border border-[#E4E4E7] mr-3 cursor-pointer">
        <img
          src="/movie-web-img/genre-logo.svg"
          alt="genre"
          onClick={toggleGenres}
        />
        <input
          className="text-[16px] not-italic font-bold text-black w-[90px] outline-none cursor-pointer bg-transparent"
          placeholder="Genre"
        />
      </div>

      {showGenres && (
        <div className="absolute top-[60px] left-0 bg-white border border-gray-300 shadow-md z-10 w-[720px] p-4 rounded-[20px]">
          <h2 className="font-bold mb-1 text-2xl mt-[10px]">Genres</h2>
          <p className="text-[16px] mb-6 text-gray-600 mt-[10px]">
            See lists of movies by genre
          </p>
          <p className="border border-[e4e4e6] mb-6"></p>
          <div className="grid grid-cols-5 gap-4">
            {genres.map((genre, index) => (
              <button
                key={index}
                onClick={() => handleClick(genre)}
                className="text-sm hover:bg-gray-200 rounded-[20px] px-2 py-1 flex relative font-semibold bg-white border border-[e4e4e6] pl-[15px]"
              >
                {genre}
                <img
                  src="/movie-web-img/arrow-right.svg"
                  className="absolute right-1 top-[6px]"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Genre;
