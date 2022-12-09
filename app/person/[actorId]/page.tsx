import Image from "next/image";
import React from "react";
import { actorUrl } from "../../../config";
import { Person } from "../../../interface/types";
import { IMAGE_BASE_URL, POSTER_SIZE, POPULAR_BASE_URL } from "../../../config";
import { fetchMovies } from "../../../fetchers/fetchMovies";

type Props = {
  params: {
    actorId: string;
  };
};

const getActor = async (actorId: string) => {
  const person = await fetch(actorUrl(actorId));
  return (await person.json()) as Person;
};

const page = async ({ params: { actorId } }: Props) => {
  const person = await getActor(actorId);

  return (
    <div className="container grid grid-cols-4 my-14 gap-10">
      <div className="flex flex-col space-y-5">
        <Image
          src={
            person.profile_path
              ? IMAGE_BASE_URL + POSTER_SIZE + person.profile_path
              : "/no_image.jpg"
          }
          width={320}
          height={384}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={person.name}
          className="rounded-lg object-contain"
        />
        <h1 className="mt-5 font-bold text-2xl">About Person</h1>
        <div>
          <h2 className="font-bold">popularity</h2>
          <p>{person.popularity}</p>
        </div>
        <div>
          <h2 className="font-bold">Gender</h2>
          <p>{person.gender == 2 ? "Male" : "Female"}</p>
        </div>
        <div>
          <h2 className="font-bold">Birthday</h2>
          <p>{person.birthday}</p>
        </div>
        <div>
          <h2 className="font-bold">Place Of Birth</h2>
          <p>{person.place_of_birth}</p>
        </div>
      </div>
      <div className="info col-span-3 space-y-5">
        <div className="info  bg-gray-900 rounded-lg p-4 space-y-5">
          <h1 className="text-4xl font-bold">{person.name}</h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Biography</h2>
            <p className="whitespace-pre-line">{person.biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
