<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { authClient } from "$lib/auth-client";
  import { AtSign, Eye, EyeClosed, Key, Sparkles } from "@lucide/svelte";
  import { createForm } from "@tanstack/svelte-form";
  import z from "zod";
  import Button from "../../../components/Button.svelte";
  import { m } from "../../../paraglide/messages";

  let email = page.url.searchParams.get("email") || "";

  let showPassword = $state(false);
  let type = $derived(showPassword ? "text" : "password");

  let formError = $state("");

  const form = createForm(() => ({
    defaultValues: {
      email,
      password: "",
    },
    onSubmit: async (form) => {
      const r = await authClient.signIn.email({
        ...form.value,
      });
      if (r.error) {
        formError = m.merry_deft_alligator_devour();
      } else {
        goto("/dashboard");
      }
    },
    listeners: {
      onChange: () => {
        if (formError !== "") {
          formError = "";
        }
      },
    },
  }));
</script>

<h1>Login</h1>
<form
  onsubmit={(e) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  }}
  class={"flex flex-col gap-4"}
>
  {#if formError !== ""}
    <div
      class="flex flex-col rounded-box p-4 border border-error bg-error/10 prose"
    >
      <p>{formError}</p>
    </div>
  {/if}
  <form.Field
    name="email"
    validators={{
      onChange: z.email(m.mealy_blue_manatee_engage()),
    }}
  >
    {#snippet children(field)}
      <label
        class={[
          "input w-full",
          field.state.meta.errors.length > 0 && "input-error",
        ]}
      >
        <AtSign class="w-4 h-4 opacity-40" />
        <input
          placeholder={m.big_patchy_donkey_blink()}
          type="email"
          onblur={field.handleBlur}
          value={field.state.value}
          oninput={(e) => field.handleChange(e.currentTarget.value)}
          name={field.name}
        />
      </label>
      {#if field.state.meta.errors.length > 0}
        <small class="text-error -mt-4">
          {field.state.meta.errors[0]?.message}
        </small>
      {/if}
    {/snippet}
  </form.Field>
  <form.Field
    name="password"
    validators={{
      onBlur: z
        .string()
        .min(8, m.mealy_small_spider_twist())
        .max(24, m.best_blue_giraffe_glow()),
    }}
  >
    {#snippet children(field)}
      <label
        class={[
          "input w-full",
          field.state.meta.errors.length > 0 && "!input-error",
        ]}
      >
        <Key class="w-4 h-4 opacity-40" />
        <input
          placeholder="{m.fit_male_bird_zip()}}"
          {type}
          onblur={field.handleBlur}
          value={field.state.value}
          oninput={(e) => field.handleChange(e.currentTarget.value)}
          name={field.name}
        />
      </label>
      {#if field.state.meta.errors.length > 0}
        <small class="text-error -mt-4">
          {field.state.meta.errors[0]?.message}
        </small>
      {/if}
    {/snippet}
  </form.Field>

  <button
    type="button"
    onclick={() => (showPassword = !showPassword)}
    class="btn btn-sm self-end"
  >
    {#if showPassword}
      <Eye class="w-4 h-4" />
    {:else}
      <EyeClosed class="w-4 h-4" />
    {/if}
  </button>
  <form.Subscribe
    selector={(state) => ({
      canSubmit: state.canSubmit,
      isSubmitting: state.isSubmitting,
    })}
  >
    {#snippet children(state)}
      <Button
        disabled={!state.canSubmit || formError !== ""}
        className="w-full"
        type="submit"
      >
        {m.actual_long_orangutan_strive()}
        {#snippet itemAfter()}
          <Sparkles class="w-4 h-4 text-secondary" />
        {/snippet}
      </Button>
    {/snippet}
  </form.Subscribe>
</form>
