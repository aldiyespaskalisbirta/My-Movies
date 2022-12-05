"use client";

import React from "react";
import { SearchIcon } from "../../../assets/Icons";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = React.useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setText(value);
  };

  return (
    <>
      <input
        className="h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200"
        type="text"
        placeholder="Search Movie"
        value={text}
        onChange={handleInput}
      />
      <div className="absolute right-4 top-9">
        <SearchIcon />
      </div>
    </>
  );
};

export default SearchInput;
