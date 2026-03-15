<script lang="ts">
  type Props = {
    children?: import("svelte").Snippet;
  };

  let { children }: Props = $props();
</script>

<div class="lt-card-header">
  {@render children?.()}
</div>

<style>
  .lt-card-header {
    --_card-header-gap: var(--lt-card-header-gap, 0.5rem);
    --_card-header-margin-bottom: var(--lt-card-header-margin-bottom, 1.25rem);
    --_card-header-title-size: var(--lt-card-header-title-size, 1.5rem);
    --_card-header-title-line-height: var(--lt-card-header-title-line-height, 1.25);
    --_card-header-title-tracking: var(--lt-card-header-title-tracking, -0.02em);
    --_card-header-copy-color: var(--lt-card-header-copy-color, var(--lt-color-text-muted, #59636e));
    display: grid;
    gap: var(--_card-header-gap);
    margin-bottom: var(--_card-header-margin-bottom);
  }

  .lt-card-header :global(h1),
  .lt-card-header :global(h2) {
    margin: 0;
    font-size: var(--_card-header-title-size);
    line-height: var(--_card-header-title-line-height);
    letter-spacing: var(--_card-header-title-tracking);
  }

  .lt-card-header :global(p) {
    margin: 0;
    color: var(--_card-header-copy-color);
    line-height: 1.5;
  }
</style>
