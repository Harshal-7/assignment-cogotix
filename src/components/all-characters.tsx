"use client";

import { Character } from "@/lib/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AllCharactersss() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      console.log("All Characters: ", response.data.results);
      setCharacters(response.data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="grid grid-cols-5 w-full p-4 gap-4">
      {characters.map((character: Character, index: number) => (
        <div key={index} className="h-44 bg-gray-200 rounded-xl">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={character.image}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
}
