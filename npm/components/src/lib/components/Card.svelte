<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
    header?: import("svelte").Snippet;
    footer?: import("svelte").Snippet;
  };

  let {
    children,
    header,
    footer,
    class: className = "",
    ...restProps
  }: Props = $props();
</script>

<section {...restProps} class={`lt-card ${className}`.trim()}>
  {#if header}
    <div class="lt-card__header">
      {@render header()}
    </div>
  {/if}

  <div class="lt-card__body">
    {@render children?.()}
  </div>

  {#if footer}
    <div class="lt-card__footer">
      {@render footer()}
    </div>
  {/if}
</section>

<style>
  .lt-card {
    --_card-bg: var(--lt-card-bg, var(--lt-color-surface, #ffffff));
    --_card-border-color: var(--lt-card-border, var(--lt-color-border, #d0d7de));
    --_card-border-width: var(--lt-card-border-width, 1px);
    --_card-radius: var(--lt-card-radius, var(--lt-radius-lg, 0.75rem));
    --_card-padding: var(--lt-card-padding, 1.5rem);
    --_card-gap: var(--lt-card-gap, 1rem);
    --_card-color: var(--lt-card-color, var(--lt-color-text, #1f2328));
    --_card-shadow: var(--lt-card-shadow, 0 1px 3px rgba(27, 31, 36, 0.08));
    --_card-header-padding: var(--lt-card-header-padding, 0 0 var(--lt-card-section-gap, 1rem) 0);
    --_card-footer-padding: var(--lt-card-footer-padding, var(--lt-card-section-gap, 1rem) 0 0 0);
    --_card-section-border: var(--lt-card-section-border, var(--lt-color-border-muted, #e6ebf1));
    display: grid;
    gap: var(--_card-gap);
    padding: var(--_card-padding);
    border: var(--_card-border-width) solid var(--_card-border-color);
    border-radius: var(--_card-radius);
    background: var(--_card-bg);
    color: var(--_card-color);
    box-shadow: var(--_card-shadow);
  }

  .lt-card__header:empty,
  .lt-card__body:empty,
  .lt-card__footer:empty {
    display: none;
  }

  .lt-card__header {
    padding: var(--_card-header-padding);
    border-bottom: 1px solid var(--_card-section-border);
  }

  .lt-card__body {
    min-width: 0;
  }

  .lt-card__footer {
    padding: var(--_card-footer-padding);
    border-top: 1px solid var(--_card-section-border);
  }
</style>
