import Link from "next/link";
type CardsProps = {
  title: string;
  rate: number;
  image?: string;
  backdrop_path?: string;
};

const Cards = ({ title, rate, image, backdrop_path }: CardsProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <img
        src={`${imageUrl}${image}`}
        alt="poster"
        className="w-[300px] rounded-md"
      />
      <div className="bg-[#f4f4f6] border rounded-md h-[110px]">
        <p className="text-lg mt-2 font-bold ml-[16px]">{title}</p>
        <div className="flex items-center mt-2.5">
          <img
            src="/movie-web-img/star.svg"
            alt="rate-icon"
            className="ml-[5px]"
          />
          <p className="text-lg font-bold">{rate}</p>
          <p className="text-lg">/10</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
