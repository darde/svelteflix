<script>
  import { fly } from "svelte/transition";
  import { onMount } from 'svelte';
  import MoviesList from '../../components/MoviesList.svelte';

  export let movies = []

  onMount(async () => {
    movies = await JSON.parse(window.localStorage.getItem('mylist'));
  });

</script>

<div class="" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }}>
  <h1 class="title">My Movies List</h1>
  {#if movies.length > 0}
  <MoviesList popular={movies} />
  {:else}
  <h2 class="subtitle">You don't have any movies on your list yet.</h2>
  {/if}
</div>
