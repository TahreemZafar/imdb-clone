"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-6xl mx-auto justify-center items-center px-5 mt-3"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Keywords"
          className="w-full h-14 placeholder-gray-500 outline-none bg-zinc-200 flex-1 pr-5 pl-5 ml-5 my-5 text-black"
        />

        <button
          disabled={!search}
          type="submit"
          className=" disabled:text-gray-500 bg-slate-950 h-14 w-36 px-5 text-center mr-5 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}
