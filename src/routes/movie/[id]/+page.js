/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const apiKey = import.meta.env.VITE_IMDB_API_KEY

  const baseURL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`
  const res = await fetch(baseURL)
  const movieDetail = await res.json()
  if (res.ok) {
    return {
      props: {
        movieDetail
      }
    }
  }
}
