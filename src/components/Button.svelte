<script>
  export let disabled, handleOnClick
</script>

<button on:click={handleOnClick} class={`w-[120px] ${disabled ? 'bg-gray-400 cursor-default' : 'bg-green-800 cursor-pointer'} text-white h-[50px] flex items-center justify-center first:rounded-tl-[12px] first:rounded-bl-[12px] last:rounded-tr-[12px] last:rounded-br-[12px]`}>
  <slot />
</button>