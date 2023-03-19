<script>
  import HeartSolid from 'svelte-awesome-icons/HeartSolid.svelte'
  import HeartRegular from 'svelte-awesome-icons/HeartRegular.svelte'

  export let movie
  export let handleFavorite
  export let isFavorite
</script>

<div class="bg-white rounded-[8px] cursor-pointer shadow-xl shadow-black/50 flex flex-col justify-between">
  <a href={`/movie/${movie.id}`}>
    <div class="pb-[10px] box-border flex flex-col">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="700" height="800" class="rounded-t-md">
      <div class="px-6 py-2 flex flex-col">
        <span class="font-bold text-xl mb-1">{movie.title}</span>
        <span class="text-gray-700 text-base mb-1">{movie.release_date}</span>
      </div>
    </div>
  </a>
  {#if (handleFavorite)}
  <div class="flex justify-end pr-[10px] pb-[10px]">
    <button on:click={() => handleFavorite(movie)}>
      {#if (isFavorite)}
      <HeartSolid size="24" color="#333333" />
      {:else}
      <HeartRegular size="24" color="#333333" />
      {/if}
    </button>
  </div>
  {/if}
</div>


