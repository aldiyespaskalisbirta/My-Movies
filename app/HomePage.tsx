"use client";

import React from "react";
import Link from "next/link";
// Fetch hook
import { useFetchMovies } from "../hooks/useFetchMovies";
// Config

// Components
import Navbar from "../components/server/Navbar/Navbar";
import Hero from "../components/server/Hero/Hero";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Card from "../components/server/Card/Card";
import Grid from "../components/server/Grid/Grid";

const HomePage = () => {
  const [query, setQuery] = React.useState("");

  const { data, fetchNextPage, error } = useFetchMovies(query);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  console.log(data);
  return (
    <main
      className="main-element relative h-screen overflow-y-scroll pb-10"
      onScroll={handleScroll}
    >
      <Navbar setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data.pages[0].results[0].backdrop_path &&
            IMAGE_BASE_URL +
              BACKDROP_SIZE +
              data.pages[0].results[0].backdrop_path
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
      <div className="container mb-10">
        <Grid
          className="card grid grid-cols-4 gap-x-4 gap-y-6 mx-5 mt-5"
          title={
            query
              ? `Search Results: ${data?.pages[0].total_results}`
              : "Popular Movies"
          }
        >
          {data &&
            data.pages &&
            data.pages.map((page) =>
              page.results.map((movie) => (
                <Link href={`/${movie.id}`} key={movie.id}>
                  <Card
                    imgUrl={
                      movie.poster_path &&
                      IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    }
                    title={movie.title}
                  />
                </Link>
              ))
            )}
        </Grid>
      </div>
    </main>
  );
};

export default HomePage;
