<script lang="ts">
  type Props = {
    children?: import("svelte").Snippet;
  };

  let { children }: Props = $props();
</script>

<p class="lt-section-label">
  {@render children?.()}
</p>

<style>
  .lt-section-label {
    --_section-label-font-size: var(--lt-section-label-font-size, 0.75rem);
    --_section-label-font-weight: var(--lt-section-label-font-weight, var(--lt-font-weight-strong, 600));
    --_section-label-color: var(--lt-section-label-color, var(--lt-color-text-muted, #59636e));
    --_section-label-letter-spacing: var(--lt-section-label-letter-spacing, 0.04em);
    margin: 0;
    color: var(--_section-label-color);
    font-size: var(--_section-label-font-size);
    font-weight: var(--_section-label-font-weight);
    text-transform: uppercase;
    letter-spacing: var(--_section-label-letter-spacing);
  }
</style>
