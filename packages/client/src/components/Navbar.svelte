<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import { Settings } from "@lucide/svelte";
  import { appConfig } from "shared";
  import { m } from "../paraglide/messages";
  import { locales, setLocale } from "../paraglide/runtime";
  import { themeStore } from "../stores/themeStore";
  import Button from "./Button.svelte";

  const session = authClient.useSession();
</script>

<nav class="flex flex-row py-4 items-center border-base-content/10 border-b">
  <div class="flex flex-row gap-4 flex-1 items-center">
    <a href="/" class="text-2xl font-semibold">{appConfig.name.full}</a>
    {#if $session.data}
      <Button
        onclick={() => goto("/dashboard/settings")}
        className="btn-ghost opacity-50 hover:opacity-100 active:opacity-100"
        iconAnimations={false}
      >
        <p class="md:block hidden">{m.known_soft_shark_read()}</p>
        {#snippet itemAfter()}
          <Settings class="w-4 h-4" />
        {/snippet}
      </Button>
    {/if}
  </div>
  <div class="flex flex-row gap-2 items-center">
    <details class="dropdown">
      <summary class="btn btn-square">{m.EMOJI()}</summary>
      <ul
        class="menu dropdown-content bg-base-100 rounded-box border border-base-200 z-1 gap-2"
      >
        {#each locales as locale}
          <button class="btn" onclick={() => setLocale(locale)}
            >{m.EMOJI(
              {},
              {
                locale,
              },
            )}</button
          >
        {/each}
      </ul>
    </details>
    <Button
      onclick={() => {
        const newTheme = $themeStore === "dark" ? "light" : "dark";
        themeStore.set(newTheme);
      }}
    >
      {$themeStore === "dark" ? "🌕" : "☀️"}
    </Button>
  </div>
</nav>
