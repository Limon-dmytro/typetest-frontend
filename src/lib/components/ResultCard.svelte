<script>

  export let wpm = 0
  export let accuracy = 0
  export let errors = 0
  export let time = 0

</script>

<div class="result-card">
  <h2>Результат тесту</h2>
  
  <div class="stats">
     <div class="stat">
       <span class="value">{wpm}</span>
       <span class="label">WPM</span>
     </div>
     <div class="stat">
        <span class="value">{accuracy}%</span>
        <span class="label">Точність</span>
     </div>
     <div class="stat">
        <span class="value">{errors}</span>
        <span class="label">Помилки</span>
     </div>
     <div class="stat">
        <span class="value">{time}</span>
        <span class="label">Час</span>
     </div>
   </div>
</div>

<style>

  .result-card {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-radius: 20px;
    padding: 2rem;
    max-width: 500px;
    width: 100%;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  }

  h2 {
    margin: 0 0 1.8rem 0;
    color: #1e1b4b;
    font-size: 1.6rem;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .value {
    font-size: 2rem;
    font-weight: 700;
    color: #4f46e5;
  }

  .label {
    font-size: 0.95rem;
    color: #6b7280;
  }

</style>