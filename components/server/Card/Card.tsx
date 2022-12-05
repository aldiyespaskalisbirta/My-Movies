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
    <div className="card w-56 h-96 bg-gray-900 shadow-lg rounded-3xl overflow-hidden hover:scale-105 transition transform duration-200 ease-out">
      {/* left side */}
      <div className="relative w-full h-full items-start">
        <Image
          src={imgUrl}
          className="object-cover"
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      {/* right side */}
      <div className="block bg-gray-900 text-center">
        <h1 className="font-bold text-xl py-2">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
