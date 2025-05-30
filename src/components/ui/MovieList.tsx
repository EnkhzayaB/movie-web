const MovieList = ({ title, image }: { title: string }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="">
      <div className="w-[300px]">
        <img src={`${imageUrl}${image}`} alt="poster" className="rounded-2xl" />
        <div className="border bg-[#f4f4f5] border-[#f4f4f5] rounded-[20px] pl-3 pb-2 flex flex-col pt-[10px]">
          <p className="text-lg not-italic font-normal">{title}</p>
          <div className="flex gap-2 pt-2">
            <img src="/movie-web-img/star.svg" alt="icon" />
            <p className="text-[18px] font-semibold"></p>
            <p className="text-[18px] font-bold">/ 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
