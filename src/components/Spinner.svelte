<script>
  import ArrowsSpinSolid from 'svelte-awesome-icons/ArrowsSpinSolid.svelte'
  export let color = '#333333'
</script>

<div class="min-h-full min-w-full flex justify-center items-center">
  <ArrowsSpinSolid size="42" color={color} class="animate-spin" />
</div>