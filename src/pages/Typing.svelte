<script>
  
  // @ts-nocheck
  import { onMount , onDestroy } from 'svelte';
  import { push } from 'svelte-spa-router'
  import { calculateResults } from '../lib/utils/results';
  import Button from '../lib/components/Button.svelte'
  import TextDisplay from '../lib/components/TextDisplay.svelte';
  import TypingInput from '../lib/components/TypingInput.svelte';
  import Timer from '../lib/components/Timer.svelte';
  import ProgressBar from '../lib/components/ProgressBar.svelte';
    
  
  let text = 'Завантаження...'
  let userInput = ''
  let seconds = 60
  let isRunning = false
  let timer = null
  let startTime = 60
  let loading = true
  let error = ''

  onMount(async () => {
    try {
      const res = await fetch('http://127.0.0.1:3000/api/text')
      const data = await res.json()
      text = data.text
      loading = false
    } catch (e) {
      error = 'Не вдалось завантажити текст'
      loading = false
    }
  })

  $: progress = text.length > 0 ? Math.min(100, Math.round((userInput.length / text.length) * 100)) : 0

  /** @param {string} value */
  function handleInput(value) {
    userInput = value
    

    if (!isRunning && value.length > 0) {
      isRunning = true
      
      timer = setInterval(() => {
        seconds -= 1
       
        if (seconds <= 0) {
          seconds = 0
          finishTesting()
        }
      }, 1000)
    }

    if (text && value.length >= text.length) {
      finishTesting()
    }
  }

  const results = calculateResults({ text , userInput , startTime , seconds })
  
  function finishTesting() {
    clearInterval(timer)
    timer = null
    isRunning = false

    const results = calculateResults()
    sessionStorage.setItem('typetest-results' , JSON.stringify(results))
    push('/result')
  }

  //Очистка таймеру
  onDestroy(() => {
    clearInterval(timer)
  })

</script>

<main>

  <div class="side-bar left"></div>
  <div class="side-bar right"></div>

  {#if loading}
     <p>Завантаження тексту...</p>
  {:else if error} 
     <p style="color: red;">{error}</p>  
  {:else}
     <div class="header">
        <Timer seconds={seconds}  isRunning={isRunning} />
     </div>

     <div class="content">
        <TextDisplay {text} {userInput} />

        <div class="input-wrapper">
           <TypingInput value={userInput} onInput={handleInput} />
        </div>
        <div class="progres-blok">
          <ProgressBar progress={progress} />
          <div class="progres-info">
            <span>Прогрес</span>
            <span>{progress}%</span>
          </div>
        </div>
     </div>
  

     <div class="footer">
        <Button text="Завершити тест" onClick={finishTesting} />
     </div>
  {/if}
  
</main>

<style>

   main {
     min-height: 100vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 2rem 1rem;
     font-family: system-ui,  sans-serif;
   }

   .header {
    margin-bottom: 2rem;
   }

   .content {
    width: 100%;
    max-width: 750px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
   }

   .input-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
   }

   .footer {
    margin-top: 4.5rem;
   }

   .progres-blok {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
   }

   .progres-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: #4b5563;
    padding: 0 0.2rem;
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