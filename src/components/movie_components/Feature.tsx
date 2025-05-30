"use client";
import { useState } from "react";
type FeatureProps = {
  title: string;
  image?: string;
  vote: number;
  key: number;
  summary: string;
  rate: number;
};

const Feature = ({ title, summary, image, rate }: FeatureProps) => {
  // const imageUrl = "https://image.tmdb.org/t/w500";
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="relative flex w-screen pt-3.5 shrink-0">
      <img
        src={`${imageUrl}${image}`}
        alt="poster"
        className="bg-center bg-no-repeat bg-cover w-[99.6%] h-[900px]"
      />
      <div className="absolute top-[25%] left-[10%] text-[#f4f4f6]">
        <p className="text-[16px] font-medium">Now Playing:</p>
        <p className="text-lg mt-2 text-[36px] font-bold">{title}</p>
        <div className="flex">
          <img src="/movie-web-img/star.svg" />
          <p className="text-lg mt-2 text-[16px] font-extrabold ml-[10px]">
            {rate}
          </p>
          <p className="text-lg mt-2 text-[16px] font-medium">/10</p>
        </div>
        <p className="text-lg mt-2 font-medium w-[300px]">{summary}</p>
      </div>
      <button className="rounded-[50%] bg-white border border-gray absolute top-[50%] right-[3%] px-2 py-2 w-[60px] h-[60px] flex justify-center items-center">
        <img src="/movie-web-img/arrow-right.svg" />
      </button>
    </div>
  );
};

export default Feature;
