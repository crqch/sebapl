<script>
  import { page } from "$app/state";
  import { m } from "../paraglide/messages";
</script>

<footer class="flex flex-col w-full items-center p-2 md:px-10 bg-base-200/50">
  <div class="flex flex-row justify-between w-full">
    {#if page.url.pathname === "/"}
      <i class="opacity-50">
        {@html m.awake_even_crab_find()}
      </i>
    {/if}
  </div>
  <code class="text-xs">{m.short_inner_tern_nourish()}</code>
</footer>
