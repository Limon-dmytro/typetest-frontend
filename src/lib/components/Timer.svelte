<script>

 let { seconds = 60, isRunning = false} = $props()

 let minutes = $derived(Math.floor(seconds / 60))
 let displaySeconds = $derived(seconds % 60)
 let timeString = $derived(`${minutes}:${String(displaySeconds).padStart(2, '0')}`)
</script>

<div class="timer" class:runnings={isRunning} class:warning={seconds <= 10}>

    {timeString}

</div>

<style>

    .timer {
      font-size: 2.8rem;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      color: #1e1b4b;
      padding: 0.6rem 1.8rem;
      background: rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.45);
      text-align: left;
      letter-spacing: 0.3px;
      min-width: 140px;
      text-align: center;
      transition: all 0.3s ease;
    }
  
    .runnings {
      box-shadow: 0 4px 20px rgba(79, 70, 229, 0.15);
    }
  
    .warning {
      color: #dc2626;
      background: rgba(254, 226, 226, 0.5);
      border-color: rgba(220, 38, 38, 0.3);
    }
  
   
  
  </style>