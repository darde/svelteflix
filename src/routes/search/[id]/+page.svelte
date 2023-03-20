<script>
  import MovieCard from '../../../components/MovieCard.svelte';

  export let data
</script>

<div class='w-full pt-[20px] px-[30px] 2xl:px-0 text-center'>
  <h1 class="text-white text-[24px] mb-[30px]">Search Results</h1>
  {#if data.props.searchResults.length === 0}
  <h2 class="text-white text-center">No results found for this search.</h2>
  {/if}
  <div class="pb-10 mx-auto grid max-w-7xl gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    {#each data.props.searchResults as movie}
      <MovieCard {movie} />
    {/each}
  </div>
</div>