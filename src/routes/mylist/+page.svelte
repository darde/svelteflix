<script>
  import { fly } from "svelte/transition";
  import { onMount } from 'svelte';
  import Search from "../../components/Search.svelte";
  import MovieCard from "../../components/MovieCard.svelte";

  export let movies = []

  onMount(async () => {
    movies = await JSON.parse(window.localStorage.getItem('mylist'));
  });

</script>


<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }} class='max-w-[1530px] mx-auto py-[20px] px-[30px] 2xl:px-0'>
  <Search />
  <h1 class="title">My Movies List</h1>
  <div class="pb-10 gap-6 flex justify-center flex-wrap">
    {#each movies as movie}
      <div class="max-w-[230px]">
        <MovieCard {movie} />
      </div>
    {/each}
  </div>
</div>


