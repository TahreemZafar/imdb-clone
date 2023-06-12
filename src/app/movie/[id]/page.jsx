import Image from "next/image";

async function getMovie(movieId) {
    
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=279e63588b93b6e5fda9d43c3e48755a`);
    
    return await res.json();

}


export default async function page({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId);

  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg mt-8" placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="movie's image"
          style={{
            maxWidth: "100%",
            height: "100%"
          }}
        ></Image>
        <div className="p-2">
            <h2 className="text-xl mb-5 md:mb-3 font-bold text-center mt-5 md:text-left">{movie.title || movie.name}</h2>
            <p className="text-lg mb-5">{movie.overview}</p>

            <p className="mb-3 text-center md:text-left"><span className="font-semibold mr-1">Date Released:</span>{movie.release_date || movie.first_air_date }</p>

            <p className="mb-3 text-center md:text-left"><span className="font-semibold mr-1">Rating</span>{movie.vote_count}</p>

        </div>

        </div>
       
    </div>
  )
}
