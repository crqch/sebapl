<script>
  import { authClient } from "$lib/auth-client";
  import { AtSign, ChevronRight } from "@lucide/svelte";
  import { appUrls } from "shared";
  import Button from "../../components/Button.svelte";
  import { m } from "../../paraglide/messages";
</script>

<h1>{m.shy_proud_felix_praise()}</h1>
<div class="divider">
  <p class="text-sm">{m.many_late_grizzly_transform()}</p>
</div>
<div class="flex flex-row items-center w-full justify-between gap-2">
  <Button
    onclick={() =>
      authClient.signIn
        .social({
          provider: "github",
          callbackURL: appUrls.frontend + "/dashboard",
        })
        .then((r) => {
          if (r.data?.redirect) {
            const window = new Window();
            window.location.href = r.data.url || "";
            window.open();
          }
        })}
    className="flex-1"
  >
    {#snippet itemBefore()}
      <svg
        class="w-4 h-4"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
          transform="scale(64)"
          fill="#ffff"
        /></svg
      >
    {/snippet}
  </Button>

  <Button
    onclick={() =>
      authClient.signIn
        .social({
          provider: "google",
          callbackURL: appUrls.frontend + "/dashboard",
        })
        .then((r) => {
          if (r.data?.redirect) {
            const window = new Window();
            window.location.href = r.data.url || "";
            window.open();
          }
        })}
    className="flex-1"
  >
    {#snippet itemBefore()}
      <svg
        class="w-4 h-4"
        viewBox="0 0 256 262"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        ><path
          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          fill="#4285F4"
        /><path
          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          fill="#34A853"
        /><path
          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          fill="#FBBC05"
        /><path
          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          fill="#EB4335"
        /></svg
      >
    {/snippet}
  </Button>

  <Button
    onclick={() =>
      authClient.signIn
        .social({
          provider: "discord",
          callbackURL: appUrls.frontend + "/dashboard",
        })
        .then((r) => {
          if (r.data?.redirect) {
            const window = new Window();
            window.location.href = r.data.url || "";
            window.open();
          }
        })}
    className="flex-1"
  >
    {#snippet itemBefore()}
      <svg
        viewBox="0 0 256 199"
        class="w-4 h-4"
        width="256"
        height="199"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        ><path
          d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
          fill="#5865F2"
        /></svg
      >{/snippet}
  </Button>
</div>
<div class="divider">
  <p class="text-sm">{m.big_silly_sloth_promise()}</p>
</div>
<form method="POST" class="flex flex-col gap-2">
  <label class="input w-full">
    <AtSign class="w-4 h-4 opacity-40" />
    <input
      required
      id="email"
      placeholder={m.big_patchy_donkey_blink()}
      type="email"
      name="email"
    />
  </label>
  <Button className="w-full" type="submit">
    {#snippet itemAfter()}
      <ChevronRight class="w-4 h-4" />
    {/snippet}
    {m.steep_sound_tuna_nail()}
  </Button>
</form>
