<script>

    export let value = ''
    export let disabled = false
    export let onInput = () => {}

    /** @param {Event} e */
    function handleInput(e) {
      const input = /** @type {HTMLInputElement} */ (e.target)
      // @ts-ignore
      onInput(input.value)
    }

    /** @param {KeyboardEvent} e */
    function handleKeydown(e) {
      if (e.key === 'Backspace' || e.key === 'Delete') {
         e.preventDefault()
      }
    }
  
  </script>

  <input
    type="text"
    class="typing-input"
    value={value}
    {disabled}
    on:input={handleInput}
    on:keydown={handleKeydown}
    placeholder="Починайте друкувати тут....."
    autocomplete="off"
    autocapitalize="off"
    spellcheck="false"
    />

<style>
    
   .typing-input {
      width: 100%;
      max-width: 700px;
      padding: 1rem 1.3rem;
      font-size: 1.25rem;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.45);
      background: rgba(255,255,255,0.35);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #1e1b4b;
      outline: none;
      transition: all 0.25s ease;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
   }   

   .typing-input::placeholder {
      color: #6b7280;
   }

   .typing-input:focus {
      background: rgba(255,255,255,0.5);
      border-color: rgba(79,70,229,0.5);
      box-shadow: 0 4px 20px rgba(79,70,229,0.15);
   }

   .typing-input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
   }
    
</style>