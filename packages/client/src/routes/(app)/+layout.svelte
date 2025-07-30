<script lang="ts">
  import Footer from "../../components/Footer.svelte";
  import Navbar from "../../components/Navbar.svelte";

  const { children } = $props();
</script>

<div class="md:px-20 lg:px-40 px-4">
  <Navbar />
  <div class="min-h-screen w-full">
    {@render children()}
  </div>
</div>
<Footer />
