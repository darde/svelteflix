<script>
  export let videoKey = 'gTPFVKfjFrU'
  console.log({ videoKey })
</script>
<iframe scrolling="no" class="iframe" src={`https://www.youtube.com/embed/${videoKey}`} title="Svelte video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
</iframe>

<style>
  .iframe {
      display: block;       /* iframes are inline by default */
      background: #000;
      border: none;         /* Reset default border */
      height: 45vw;        /* Viewport-relative units */
      width: 80vw;
  }
</style>