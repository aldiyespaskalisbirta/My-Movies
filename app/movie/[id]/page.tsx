import React from "react";
import Actors from "../../../components/server/Actors/Actors";
import MovieInfo from "../../../components/server/MovieInfo/MovieInfo";
import { Credits, Movie } from "../../../interface/types";
import {
  movieUrl,
  creditsUrl,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../../config";
type Props = {
  params: {
    id: string;
  };
};

const getMovieData = async (id: string) => {
  const movie = await fetch(movieUrl(id));
  return (await movie.json()) as Movie;
};

const getCredits = async (id: string) => {
  const credits = await fetch(creditsUrl(id));
  return (await credits.json()) as Credits;
};

const InformationMovie = async ({ params: { id } }: Props) => {
  const _movie = getMovieData(id);
  const _credits = getCredits(id);
  const movie = await _movie;

  return (
    <section className="md:h-screen grid place-items-center my-14">
      <div className="container flex flex-col gap-4">
        <MovieInfo
          id={movie.id.toString()}
          title={movie.title}
          genres={movie.genres}
          imgUrl={
            movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : "/no-image.jpg"
          }
          adult={movie.adult}
          tagline={movie.tagline}
          overview={movie.overview}
          release_date={movie.release_date}
          duration={movie.runtime}
          rating={movie.vote_average}
          popularity={movie.popularity}
        />
        {/* @ts-ignore */}
        <Actors creditsPromise={_credits} />
      </div>
    </section>
  );
};

export default InformationMovie;
