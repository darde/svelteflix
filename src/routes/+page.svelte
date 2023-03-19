<script>
  /** @type {import('./$types').PageData} */
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition';
  import MoviesList from '../components/MoviesList.svelte';
  import Spinner from '../components/Spinner.svelte'

  
  export let data
  
  let loading = true
  let { props } = data
  
  async function loadNextPage() {
    const response = await fetch('/api/fetchData', {
      method: 'POST',
      body: JSON.stringify({ page: props.page, totalPages: props.totalPages }),
      headers: {
        'content-type': 'application/json'
      }
    });

    const newData = await response.json();
    loading = false
    props = {
      ...props,
      page: newData.page,
      popular: [
        ...props.popular,
        ...newData.popular
      ]
    }
  }
  
  let footer
  onMount(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // console.log('ENTER')
          loading = true
          loadNextPage()
          return
        }
        // console.log('LEAVE')
      },
      {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      },
    )

    observer.observe(footer)
  })
</script>

<div class="pb-[40px]" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }}>
  <h1 class="title">Popular Movies</h1>
  <MoviesList {...props} />
  {#if loading}
  <Spinner color={'#ffffff'}/>
  {/if}
  <div class="flex justify-center bg-red-200" id="anchor" bind:this={footer} />
</div>