<script>

  export let text = ''
  export let size = 'large' // large | medium | small

</script>

<h1 class={size}>{text}</h1>

<style>

h1 {
    color: #1e1b4b;
    margin: 0;
    line-height: 1.2;
}

.large {
    font-size: 3.2rem;
}

.medium {
    font-size: 2.2rem;
}

.small {
    font-size: 1.5rem;
}

</style>