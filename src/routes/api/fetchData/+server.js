import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { page, totalPages } = await request.json()
  const apiKey = import.meta.env.VITE_IMDB_API_KEY

  if (page + 1 === totalPages) {
    return json({
      totalPages,
      page,
      popular: [],
    })
  }

  const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${
    page + 1
  }`
  const res = await fetch(baseURL)
  const data = await res.json()
  const result = {
    totalPages: data.total_pages,
    page: data.page,
    popular: data.results,
  }

  return json(result)
}
