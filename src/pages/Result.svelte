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
     
    <div class="side-bar left"></div>
    <div class="side-bar right"></div>


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

    .side-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 55px;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.28);
    overflow: hidden;
    z-index: 5;
   }

   .side-bar.left {
    left: 62px;
   }

   .side-bar.right {
    right: 62px;
   }

   .side-bar::before {
    content: '';
    position: absolute;
    top: -40%;
    left: 0;
    width: 100%;
    height: 35%;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) , rgba(233,213,255,0.85) , rgba(255,255,255,0.15), transparent);
    animation: edge-glow 3.5s ease-in-out infinite;
   }

   .side-bar.right::before {
    animation-delay: 1.75s;
   }

   @keyframes edge-glow {
    0% {
      top: -40%;
    }
    100% {
      top: 110%;
    }
   }
  
</style>