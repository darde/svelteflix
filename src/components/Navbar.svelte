<!-- md:bg-red-300 lg:bg-green-400 xl:bg-yellow-200 2xl:bg-blue-300 -->
<div class="w-full h-[130px] bg-black flex items-start sm:h-[160px]">
  <nav class={`w-[calc(100%-64px)] h-full mx-auto box-border xl:max-w-[1278px] flex items-center sm:justify-between sm:flex-row flex-col`}>
    <div>
      <a href="/">
        <img width="250" src={'images/svelteflix-logo.png'} alt="Svelte Flix Logo"/>
      </a>
    </div>
    <div class="text-white text-[18px]">
      <a href="/" class="first:mr-[30px] hover:text-yellow-300">Popular Movies</a>
      <a href="/mylist" class="hover:text-yellow-300">My Movies List</a>
    </div>
  </nav>
</div>