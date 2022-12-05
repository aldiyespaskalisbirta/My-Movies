"use client";

import React from "react";
import Link from "next/link";
// Fetch hook
import { useFetchMovies } from "../hooks/useFetchMovies";
// Config

// Components
import Navbar from "../components/server/Navbar/Navbar";
import Hero from "../components/server/Hero/Hero";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

const HomePage = () => {
  const [query, setQuery] = React.useState("");

  const { data, fetchNextPage, error } = useFetchMovies(query);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <main
      className="main-element relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <Navbar setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data.pages[0].results[0].backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : "/no_image.jpg"
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
    </main>
  );
};

export default HomePage;
