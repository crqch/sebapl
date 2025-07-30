<script lang="ts">
  let { children } = $props();
</script>

<div class="flex flex-col min-h-screen w-full items-center justify-center">
  <div
    class="flex flex-col w-full gap-4 rounded-box border border-base-300 bg-base-200/50 p-10 prose"
  >
    {@render children()}
  </div>
</div>
