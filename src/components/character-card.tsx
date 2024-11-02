"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "@/lib/types";

export default function CharacterCard({ url }: { url: string }) {
  const [characterInfo, setCharacterInfo] = useState<Character>();

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await axios.get(`${url}`);
      console.log("Dataa: ", response.data);
      setCharacterInfo(response.data);
    };
    fetchEpisode();
  }, [url]);

  return (
    <div className="h-44 bg-gray-200 rounded-xl">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={characterInfo?.image}
        alt={characterInfo?.name}
      />
    </div>
  );
}
