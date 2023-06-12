import Results from "@/Components/Results";

export const dynamic = "force-dynamic";


export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=279e63588b93b6e5fda9d43c3e48755a&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const results = data.results;


  return (
    <div>
       <Results results={results} />
    </div>
  );
}