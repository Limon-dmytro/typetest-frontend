<script>
    import { push } from 'svelte-spa-router'
    import Button from "../lib/components/Button.svelte";
 
    function startTest() {
      push('/typing')
    }
    
 </script>
 
 <main>

   <div class="side-bar left"></div>
   <div class="side-bar right"></div>
   <div class="lemons">🍋</div>
 
   <h1 class="logo">
    {#each 'TypeTest'.split('') as letter, i}
      <span style="animation-delay: {i * 0.08}s">{letter}</span>  
    {/each}
   </h1>
 
   <p>Тренажер швидкості друку</p>
 
   <Button text="Почати тест друку" onClick={startTest} />
 
 </main>
 
 <style>
 
   main {
     min-height: 100vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     padding: 2rem;
     font-family: system-ui,  sans-serif;
   }

   /*Лімон*/
   .lemons {
    position: fixed;
    top: 158px;
    left: 300px;
    width: 92px;
    height: 92px;
    font-size: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    cursor: pointer;
    transition: transform 0.25s ease;
    filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.85))
            drop-shadow(0 0 18px rgba(250, 204, 21, 0.45));
    animation: lemon-glow 2.4s ease-in-out infinite;
    user-select: none;
   }

   .lemons:hover {
    transform: scale(1.18);
   }

   @keyframes lemons-glow {
    0%, 100% {
      filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.7))
              drop-shadow(0 0 14px rgba(250, 204, 21, 0.35));
      transform: scale(1);
    }
    50% {
      filter: drop-shadow(0 0 14px rgba(250, 204, 21, 1))
              drop-shadow(0 0 24px rgba(253, 224, 71, 0.6));
      transform: scale(1.06);
    }
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
 
   .logo {
     font-size: 3.8rem;
     margin-bottom: 0.6rem;
     line-height: 1.2;
     display: flex;
     justify-content: center;
     gap: 0.02em;
   }

   .logo span {
    display: inline-block;
    color: #1e1b4b;
    background: linear-gradient(90deg, #1e1b4b 0%, #1e1b4b 46%, #e9d5ff 49%, #ffffff 50%, #e9d5ff 51%, #1e1b4b 54%, #1e1b4b 100%);
    background-size: 220% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: spark 3.5s ease-in-out infinite;
   }

   @keyframes spark {
    0%,
    15% {
      background-position: 100% 0;
    }
    45% {
      background-position: -100% 0;
    }
    45.01%,
    100% {
      background-position: 100% 0;
    }
   }
 
   p {
     font-size: 1.4rem;
     color: #4b5563;
     margin-top: 1.2rem;
     margin-bottom: 3.5rem;
   }
 
 </style>