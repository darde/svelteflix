<script>
  import { fly } from 'svelte/transition';
  import { writable } from 'svelte/store';
  import Modal, { bind } from 'svelte-simple-modal';
  import VideoPlayer from '../../../components/VideoPlayer.svelte';
  export let data

  const { movieDetail, videos: { results: videos} } = data.props

  const modal = writable(null);
  const showModal = (videoKey) => modal.set(bind(VideoPlayer, { videoKey }));
</script>

<div class="w-[calc(100%-64px)] mx-auto max-w-6xl pb-[30px]" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }}>
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
    <h2 class="text-xl mt-[20px] font-bold text-gray-600">Related Videos</h2>
    {#if videos.length > 0}
    <div class=" pt-[28px] min-w-full h-[195px] bg-[url('/images/filmstrip.png')] bg-repeat-x bg-contain rounded-md mt-[20px]">
      <div class="overflow-x-auto overflow-y-hidden min-w-full h-[138px] bg-black flex justify-start items-center px-[16px]">
        {#each videos as video}
        <div class="flex mr-[10px] last:p-0 min-w-[200px] min-h-full bg-black bg-[url('/images/youtube-logo.jpg')] bg-no-repeat bg-center">
          <button on:click={() => showModal(video.key)} class="flex justify-center items-center min-h-full min-w-full bg-black bg-opacity-90">
            <span class="text-white text-center p-[8px]">{video.name}</span>
          </button>
        </div>
        {/each}
      </div>
    </div>
    {:else}
    <span class="text-gray-600">No related videos available</span>
    {/if}
  </div>
  <Modal
    show={$modal}
    unstyled={true}
    classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-black/[.8]"
    classWindowWrap="flex justify-center items-start mt-[50px] min-h-full"
    classWindow="w-[80%] h-[45%] rounded shadow-md bg-black"
  />
</div>
