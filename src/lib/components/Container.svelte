<script>

  export let maxWidth = '800px'

</script>

<div class="container" style="max-width: {maxWidth}">
  <slot />
</div>

<style>

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
  }

</style>