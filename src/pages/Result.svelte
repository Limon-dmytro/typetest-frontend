<script>

    import { push } from 'svelte-spa-router'
    import {onMount} from 'svelte'
    import ResultCard from '../lib/components/ResultCard.svelte';
    import Button from '../lib/components/Button.svelte'

    let wpm = 0
    let accuracy = 0
    let errors = 0
    let time = 0

    onMount(() => {
      const saved = sessionStorage.getItem('typetest-results')
      if (saved) {
        const data = JSON.parse(saved)
        wpm = data.wpm || 0
        accuracy = data.accuracy || 0
        errors = data.errors || 0
        time = data.time || 0
      }
    })
  
    function toHome() {
      push('/')
    }

    function tryAgain() {
      push('/typing')
    }
  
</script>

<main>
     
    <ResultCard {wpm} {accuracy} {errors} {time} />
    <div class="buttons">
      <Button text="Спробувати ще" onClick={tryAgain} />
      <Button text="На голону" onClick={toHome} />
    </div>
    
 
</main>

<style>

    main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
    }
 
    .buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  
</style>