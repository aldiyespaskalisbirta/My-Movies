import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import { Credits } from "../../../interface/types";

type Props = {
  creditsPromise: Promise<Credits>;
};

const Actors = async ({ creditsPromise }: Props) => {
  const credits = await creditsPromise;

  return (
    <div className="w-full bg-gray-700 rounded-lg">
      <h1 className="text-4xl font-bold p-4">Actors</h1>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4">
        {credits.cast.map((actor) => (
          <div
            key={actor.id}
            className="bg-gray-900 rounded-lg flex flex-col items-center"
          >
            <div className="relative w-40 h-44">
              <Image
                src={
                  actor.profile_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
                    : "/no_image.jpg"
                }
                fill
                className="rounded-t-lg"
                alt={actor.name}
              />
            </div>
            <Link
              href={`/person/${actor.id}-${actor.name
                .replaceAll(" ", "-")
                .toLowerCase()}`}
              className="font-bold mt-2"
            >
              {actor.name}
            </Link>
            <p className="text-center">({actor.character})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
