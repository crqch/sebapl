<script>
  import { goto } from "$app/navigation";
  import { appConfig } from "shared";
  import Button from "../../components/Button.svelte";
  import { m } from "../../paraglide/messages";
</script>

<div>
  <section
    class="flex flex-col w-full md:mt-[10rem] mt-[2rem] justify-center items-center text-center gap-8"
  >
    <h1 class="text-2xl opacity-50">{appConfig.name.full}</h1>
    <Button
      onclick={() => goto("/auth")}
      className="btn-lg btn-secondary px-8 mt-8 w-max"
    >
      {m.full_lucky_bird_glow()}
    </Button>
  </section>
</div>
