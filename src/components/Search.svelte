<script>
  let inputValue = ''
  let active = false

  function handleOnBlur() {
    if (inputValue) {
      active = true
    } else {
      active = false
    }
  }
</script>
<div class="max-w-[500px] h-[50px] flex justify-center">
  <form method="get" action={`/search/${inputValue}`} class="w-full h-full flex justify-center">
    <input on:blur={handleOnBlur} on:focus={() => active = true} bind:value={inputValue} placeholder="Type something" type="text" class={`${active ? 'w-[200px] xl:w-[400px]' : 'w-[200px]'} h-full px-[20px] text-[22px] text-gray-900 rounded-tl-xl rounded-bl-xl outline-none  transition-width ease-in-out duration-300`} />
    <button class="bg-green-800 text-white text-[20px] w-[100px] h-full rounded-tr-xl rounded-br-xl">Search</button>
  </form>
</div>