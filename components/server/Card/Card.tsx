import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PlusIcon } from "../../../assets/Icons";
type Props = {
  imgUrl: string;
  title: string;
};
const Card = ({ imgUrl, title }: Props) => {
  return (
    <div className="card w-40 h-64 lg:w-56 lg:h-96 bg-gray-900 shadow-lg rounded-lg lg:rounded-3xl overflow-hidden hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-full h-full items-center">
        <Image
          src={imgUrl}
          className="object-cover"
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>

      <div className="block bg-gray-900 text-center">
        <h1 className="font-bold text-sm lg:text-xl py-2">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
