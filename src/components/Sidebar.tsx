import EpisodeList from "./all-characters";
import React from "react";

export default function Sidebar() {
  return (
    <div className="absolute top-16 left-0 h-full max-h-screen w-64 flex flex-col items-center p-4 bg-stone-900 text-white">
      {/* <div className="fixed text-2xl font-bold">Episodes</div> */}

      <div className="">
        <EpisodeList />
      </div>
    </div>
  );
}
