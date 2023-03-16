/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const apiKey = import.meta.env.VITE_IMDB_API_KEY

  const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${params.id}&page=1&include_adult=false`
  const res = await fetch(baseURL)
  const data = await res.json()
  console.log(data.results)
  if (res.ok) {
    return {
      props: {
        id: params.id,
        searchResults: data.results
      }
    }
  }
}
