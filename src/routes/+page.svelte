<script>
  /** @type {import('./$types').PageData} */
  import { fly } from 'svelte/transition';
  import MoviesList from '../components/MoviesList.svelte';

  export let data

  const { props } = data

</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }}>
  <MoviesList {...props} />
</section>