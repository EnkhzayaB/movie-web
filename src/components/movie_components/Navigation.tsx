import Genres from "@/components/movie_components/Genres";

const Navigation = () => {
  return (
    <div>
      <nav className="relative flex items-center justify-center w-full pt-3 pb-0 pl-4 pr-4 size-fit">
        <div className="absolute flex gap-3 ites-center left-6">
          <img
            src="/movie-web-img/film.svg"
            alt="logo"
            className="w-[24px] h-[24px] mt-1"
          />
          <p className="text-2xl italic font-bold  text-[#4338CA]">Movie Z</p>
        </div>

        <Genres />

        <div className="flex items-center gap-2.5 py-2 pl-4 pr-4 w-[370px] rounded-lg border border-[#E4E4E7]">
          <img src="/movie-web-img/search-item.svg" alt="" />
          <input type="text" placeholder="Search.." className="outline-none" />
        </div>
        <div className="flex w-[36px] h-[36px] py-2 pl-4 pr-4 gap-2 items-center justify-center">
          <img
            src="/movie-web-img/moon.svg"
            alt="icon"
            className="rounded-[50%] border border-[#e4e4e7]  absolute right-6 py-2 pl-2 pr-2"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
