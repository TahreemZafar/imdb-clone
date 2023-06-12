import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FiThumbsUp} from "react-icons/fi"

export default function Card({ results }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-3 transition-shadow duration-200 group">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            results.backdrop_path || results.poster_path
          }`}
          width={500}
          height={300}
          className=" md:max-h-60 sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-200" placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
          style={{
            maxWidth: "100%",
            height: "auto"
          }}
        ></Image>

           <div className="p-3">
             <p className="line-clamp-2 text-md max-w-md">{results.overview }</p>

             <h2 className="truncate text-lg font-semibold py-2">{ results.title || results.original_title }</h2>

            <p className="flex items-center mb-10 md:mb-2">
              { results.release_date || results.first_air_date }
              <FiThumbsUp size={22} className="mr-1 ml-20 md:ml-25 xl:ml-10" /> {results.vote_count}
            </p>

           </div>

      </Link>
    </div>
  );
}
