type UpcomingProps = {
  title: string;
  rate: number;
  image?: string;
};

const Upcoming = ({ title, rate, image }: UpcomingProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <img
        src={`${imageUrl}${image}`}
        alt="poster"
        className="w-[300px] rounded-md"
      />
      <div className="bg-[#f4f4f6] border rounded-md">
        <p className="text-lg font-bold ml-[16px] mt-2">{title}</p>
        <div className="flex items-center">
          <img src="/movie-web-img/star.svg" className="ml-[5px]" />
          <p className="text-lg font-bold ml-[10px]">{rate}</p>
          <p className="text-lg ">/10</p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
