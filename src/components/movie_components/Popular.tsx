type PopularProps = {
  title: string;
  rate: number;
  image?: string;
  backdrop_path?: string;
};

const Popular = ({ title, rate, image, backdrop_path }: PopularProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <img
        src={`${imageUrl}${image}`}
        alt="poster"
        className="w-[300px] rounded-md"
      />
      <div className="bg-[#f4f4f6] border rounded-md">
        <p className="text-lg mt-2 font-bold ml-[16px]">{title}</p>
        <div className="flex items-center">
          <img
            src="/movie-web-img/star.svg"
            alt="rate-icon"
            className="ml-[5px]"
          />
          <p className="text-lg mt-2 font-bold">{rate}</p>
          <p className="text-lg mt-2">/10</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
