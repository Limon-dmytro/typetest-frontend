<script>

   let { progress = 0 } = $props() // від 0 до 100

</script>

<div class="progress-wrapper">
   <div class="progress-bar" style="width: {progress}%"></div>
</div>

<style>
    
    .progress-wrapper {
       width: 100%;
       max-width: 700px;
       height: 10px;
       background: rgba(255,255,255,0.3);
       border-radius: 20px;
       overflow: hidden;
       border: 1px solid rgba(255,255,255,0.35);
    }

    .progress-bar {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #8b5cf6, #d946ef);
        border-radius: 20px;
        transition: width 0.2s ease;
    }

</style>