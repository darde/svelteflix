/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const apiKey = import.meta.env.VITE_IMDB_API_KEY
  const baseURL = 'https://api.themoviedb.org/3/movie'

  async function fetchMovieDetails() {
    const url = `${baseURL}/${params.id}?api_key=${apiKey}&language=en-US`
    const res = await fetch(url)
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error('Error fetching data: ', data)
    }
  }

  async function fetchMovieVideos() {
    const url = `${baseURL}/${params.id}/videos?api_key=${apiKey}&language=en-US`
    const res = await fetch(url)
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error('Error fetching data: ', data)
    }
  }

  return {
    props: {
      movieDetail: await fetchMovieDetails(),
      videos: await fetchMovieVideos(),
    },
  }
}
