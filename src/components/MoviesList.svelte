<script>
  import MovieCard from "./MovieCard.svelte";
  import { mylist } from '../stores/stores'

  export let popular
  
  function handleFavorite(movie) {
    const isMovieFavorite = $mylist.find(item => item.id === movie.id)
    if (isMovieFavorite) {
      mylist.update(list => list.filter(item => item.id !== movie.id))
      console.log($mylist)
    } else {
      mylist.update(list => [...list, movie])
    }
  }
</script>

<div class='w-full py-[20px] px-[30px] 2xl:px-0'>
  <div class="pb-10 mx-auto grid max-w-7xl gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
    {#each popular as movie}
      <MovieCard {movie} {handleFavorite} isFavorite={$mylist.find(item => item.id === movie.id)} />
    {/each}
  </div>
</div>
