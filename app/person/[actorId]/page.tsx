import React from "react";
import { actorUrl } from "../../../config";
import { Person } from "../../../interface/types";

type Props = {
  params: {
    actorId: string;
  };
};

const getActor = async (actorId: string) => {
  const actor = await fetch(actorUrl(actorId));
  return (await actor.json()) as Person;
};

const page = async ({ params: { actorId } }: Props) => {
  const actor = await getActor(actorId);
  return <div>{actor.name}</div>;
};

export default page;
