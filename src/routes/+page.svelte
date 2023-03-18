<script>
  /** @type {import('./$types').PageData} */
  import { fly } from 'svelte/transition';
  import MoviesList from '../components/MoviesList.svelte';

  export let data

  const { props } = data

</script>

<div class="" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }}>
  <h1 class="title">Popular Movies</h1>
  <MoviesList {...props} />
</div>