import Results from '@/Components/Results';
import React from 'react'

export default async function page({params}) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=279e63588b93b6e5fda9d43c3e48755a&query=${params.searchTerm}&language=en-US&include_adult=false`
      );

     if(!res.ok) {
        throw new Error("An error occured while fetching the data... ")
     }

     const data = await res.json()
     const results = data.results

  return (

    <div>
       {results && results.length === 0 && (
         <h1 className='text-center pt-6 '>No Results Found</h1>
       ) }

        {results && <Results results={results} />}

    </div>
  )
}
