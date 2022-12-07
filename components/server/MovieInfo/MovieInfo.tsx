import Link from "next/link";
import React from "react";
import { Genres } from "../../../interface/types";
import Thumbnail from "../Thumbnail/Thumbnail";

type Props = {
  id: string;
  title: string;
  imgUrl: string;
  release_date: string;
  duration: number;
  rating: number;
  overview: string;
  popularity: number;
  tagline: string;
  adult: boolean;
  genres: Genres[];
};
const MovieInfo = ({
  id,
  title,
  imgUrl,
  genres,
  release_date,
  duration,
  rating,
  overview,
  popularity,
  tagline,
  adult,
}: Props) => {
  return (
    <div
      className="flex flex-col md:flex-row gap-4 bg-gray-700 rounded-lg p-4 shadow-xl"
      id={`${id}`}
    >
      <div className="poster relative w-full md:w-1/2 h-[560px] rounded-lg">
        <Thumbnail imgUrl={imgUrl} />
      </div>
      <div className="info py-8 space-y-4">
        <h1 className="title font-bold text-white text-4xl">
          {title}
          <span className="font-semibold ml-3">
            ({release_date.split("-")[0]})
          </span>
        </h1>
        <div className="flex space-x-6 text-white font-semibold">
          {adult === false && (
            <span className="border border-gray-400 px-1 font-normal text-gray-400">
              PG-13
            </span>
          )}
          <p>{release_date.replaceAll("-", "/")}</p>
          <ul className="flex space-x-3">
            {genres.map((genre) => (
              <li key={genre.id} className="list-none hover:underline">
                <Link href={`genre/${genre.id}-${genre.name}/movie`}>
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="list-item">
            {Math.floor(duration / 60)}h {duration % 60}m
          </p>
        </div>
        <div className="action space-x-2">
          <button className="btn rounded-full">Add List</button>
          <button className="btn rounded-full">Like</button>
          <button className="btn rounded-full">Add Collection</button>
          <button className=" btn rounded-full">Rate Movie</button>
        </div>
        <div>
          <p className="font-semibold text-gray-300 text-lg italic">
            {tagline}
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-white text-xl ">Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
