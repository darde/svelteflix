<script>
  import { fly } from 'svelte/transition';
  export let data

  const { movieDetail } = data.props
</script>

<div in:fly={{ y: 50, duration: 500 }} out:fly={{ y: 50, duration: 500 }} class="w-[calc(100%-64px)] mx-auto box-border rounded-xl my-[20px] p-[20px] lg:max-w-[900px]">
    <h1 class="title">{movieDetail.title}</h1>
    <div class="flex-col bg-white rounded-xl p-[20px]">
      <a href={movieDetail.homepage}>
        <img class="rounded-xl" src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} alt={movieDetail.title} />
      </a>
      <h1 class="font-bold text-xl my-2">{movieDetail.title}</h1>
      <p class="text-gray-600 text-sm mt-4">{movieDetail.overview}</p>
      <p class="mt-5 text-gray-600 text-sm font-bold">Genres: {#each movieDetail.genres.map(genre => genre.name).join(', ') as genreName}<span class="font-normal">{genreName}</span>{/each}</p>
      <p class="text-gray-600 text-sm font-bold">Release Date: <span class="font-normal">{movieDetail.release_date}</span></p>
      <p class="text-gray-600 text-sm font-bold">Rating: <span class="font-normal">{movieDetail.vote_average}</span></p>
      <p class="text-gray-600 text-sm font-bold">Runtime: <span class="font-normal">{movieDetail.runtime}mins</span></p>
    </div>
</div>