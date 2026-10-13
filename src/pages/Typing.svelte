<script>
  
  // @ts-nocheck
  import { onMount , onDestroy } from 'svelte';
  import { push } from 'svelte-spa-router'
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
  }

  function calculateResults() {
    const timeSpent = startTime - seconds
    const minutes = timeSpent / 60 || 1 / 60

    let correct = 0
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) correct++
    }

    const errors = userInput.length - correct
    const accuracy = userInput.length > 0
       ? Math.round((correct / userInput.length) * 100)
       : 0

    // WPM
    const wpm = Math.round((correct / 5) / minutes)   
    return { wpm, accuracy, errors, time: timeSpent }
  }

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

        <ProgressBar {progress} />
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
    margin-top: 2.5rem;
   }
 
</style>