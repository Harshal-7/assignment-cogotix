"use client";

import CharacterCard from "@/components/character-card";
import axios from "axios";
import React, { useEffect, use, useState } from "react";

function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
  const [characters, setCharacters] = useState([]);

  const { id } = use(params);
  console.log(id);

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      console.log(response.data);
      setCharacters(response.data.characters);
    };
    fetchEpisode();
  }, [id]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-2xl font-bold p-4">Rick and Morty Characters</div>

      <div className="grid grid-cols-5 w-full p-4 gap-4">
        {characters.map((character: string, index: number) => (
          <CharacterCard url={character} key={index} />
        ))}
      </div>
    </div>
  );
}

export default EpisodePage;
