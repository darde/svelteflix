<script>
  import Search from "./Search.svelte";
</script>
<div class="w-full h-[260px] py-[30px] flex sm:items-start sm:h-[160px]">
  <div class={`w-[calc(100%-64px)] h-full mx-auto box-border xl:max-w-[1278px] flex items-center justify-between sm:flex-row flex-col`}>
    <div>
      <a href="/">
        <img width="250" src={'images/svelteflix-logo.png'} alt="Svelte Flix Logo"/>
      </a>
    </div>
    <div class="flex flex-col items-center sm:items-end pt-[10px] sm:mr-[20px] lg:flex-row-reverse lg:w-[70%] lg:items-center">
      <Search />
      <div class="text-white text-[18px] mt-[20px] flex w-full justify-between md:justify-end md:gap-[30px] lg:mr-[30px] lg:mt-0">
        <a href="/" class="hover:text-yellow-300">Popular Movies</a>
        <a href="/mylist" class="hover:text-yellow-300">My Movies List</a>
      </div>
    </div>
  </div>
</div>