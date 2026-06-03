<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Editorial from '$lib/Editorial.svelte';
  import Terminal from '$lib/Terminal.svelte';

  // Default to the Editorial reading view; honor the persisted choice once
  // mounted. Reading localStorage after mount (not in the initializer) keeps
  // SSR/hydration in sync — the inline script in app.html sets the body bg
  // early so a returning nerd-mode visitor never sees a light flash.
  let nerd = $state(false);

  onMount(() => {
    nerd = localStorage.getItem('vp-nerd') === '1';
  });

  $effect(() => {
    if (!browser) return;
    document.body.dataset.mode = nerd ? 'terminal' : 'editorial';
    localStorage.setItem('vp-nerd', nerd ? '1' : '0');
  });
</script>

<svelte:head>
  <title>Vincenzo Palazzo — Open-source software engineer</title>
</svelte:head>

<button
  class="vp-toggle"
  aria-pressed={nerd}
  title={nerd ? 'Switch to reading view' : 'Switch to nerd / terminal view'}
  onclick={() => (nerd = !nerd)}
>
  <span>nerd mode</span>
  <span class="vp-switch"><span class="vp-knob"></span></span>
</button>

<div class="vp-stage">
  {#key nerd}
    <div class="vp-fade">
      {#if nerd}
        <Terminal />
      {:else}
        <Editorial />
      {/if}
    </div>
  {/key}
</div>
