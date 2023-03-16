/** @type {import('./$types').PageLoad} */

export async function load() {
	const apiKey = import.meta.env.VITE_IMDB_API_KEY;

	async function fetchData() {
		const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
		const res = await fetch(baseURL);
		const data = await res.json();

		if (res.ok) {
			return {
				totalPages: data.total_pages,
				page: data.page,
				popular: data.results
			};
		}
	}

	return {
		props: fetchData()
	};
}
