"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {

    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <div className="text-center mt-20">
       <h1>Something went wrong...</h1>
       <button className="hover:text-amber-500" onClick={() => reset()}>Try Again.</button>
    </div>
  )
}