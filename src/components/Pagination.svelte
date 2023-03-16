<script>
  import Button from "./Button.svelte"

  export let page, totalPages, action
  console.log({ page, totalPages, action })

  function handleNextClick() {
    console.log('next called')
    if (totalPages === page) return
    action({ page: page + 1 })
  }
</script>

<div class="text-white w-full h-[50px] flex justify-center">
  <Button disabled={page === 1} handleOnClick={() => {}}>previous</Button>
  <span class="h-[50px] w-[150px] flex items-center justify-center">{page}</span>
  <Button disabled={totalPages === page} handleOnClick={handleNextClick}>next</Button>
</div>