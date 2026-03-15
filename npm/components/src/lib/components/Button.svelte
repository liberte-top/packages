<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  type ButtonVariant = "primary" | "secondary" | "ghost";
  type ButtonSize = "md" | "lg";

  type Props = HTMLButtonAttributes & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    block?: boolean;
    children?: import("svelte").Snippet;
  };

  let {
    variant = "primary",
    size = "md",
    block = false,
    children,
    class: className = "",
    type = "button",
    ...restProps
  }: Props = $props();
</script>

<button
  {...restProps}
  type={type}
  class={`lt-button lt-button--${variant} lt-button--${size} ${block ? "lt-button--block" : ""} ${className}`.trim()}
>
  {@render children?.()}
</button>

<style>
  .lt-button {
    --_button-height: var(--lt-button-height, var(--lt-control-height, 2.75rem));
    --_button-padding-inline: var(--lt-button-padding-inline, 1rem);
    --_button-gap: var(--lt-button-gap, 0.5rem);
    --_button-radius: var(--lt-button-radius, var(--lt-radius-md, 0.5rem));
    --_button-border-width: var(--lt-button-border-width, 1px);
    --_button-font-weight: var(--lt-button-font-weight, var(--lt-font-weight-strong, 600));
    --_button-font-size: var(--lt-button-font-size, 0.9375rem);
    --_button-line-height: var(--lt-button-line-height, 1);
    --_button-shadow: var(--lt-button-shadow, none);
    --_button-focus-ring: var(--lt-button-focus-ring, 0 0 0 3px rgba(31, 111, 235, 0.28));
    --_button-disabled-opacity: var(--lt-button-disabled-opacity, 0.6);
    --_button-motion-duration: var(--lt-button-motion-duration, var(--lt-motion-duration-fast, 120ms));
    --_button-motion-ease: var(--lt-button-motion-ease, ease);
    --_button-bg: var(--lt-button-primary-bg, var(--lt-color-primary, #1f6feb));
    --_button-border: var(--lt-button-primary-border, var(--lt-color-primary, #1f6feb));
    --_button-text: var(--lt-button-primary-color, var(--lt-color-on-primary, #ffffff));
    --_button-hover-bg: var(--lt-button-primary-bg-hover, var(--lt-color-primary-hover, #1658b5));
    --_button-hover-border: var(--lt-button-primary-border-hover, var(--lt-color-primary-hover, #1658b5));
    --_button-hover-text: var(--lt-button-primary-color-hover, var(--lt-color-on-primary, #ffffff));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--_button-gap);
    min-height: var(--_button-height);
    padding-inline: var(--_button-padding-inline);
    border: var(--_button-border-width) solid var(--_button-border);
    border-radius: var(--_button-radius);
    background: var(--_button-bg);
    color: var(--_button-text);
    font: inherit;
    font-size: var(--_button-font-size);
    font-weight: var(--_button-font-weight);
    line-height: var(--_button-line-height);
    text-decoration: none;
    box-shadow: var(--_button-shadow);
    cursor: pointer;
    transition:
      background-color var(--_button-motion-duration) var(--_button-motion-ease),
      border-color var(--_button-motion-duration) var(--_button-motion-ease),
      color var(--_button-motion-duration) var(--_button-motion-ease),
      box-shadow var(--_button-motion-duration) var(--_button-motion-ease),
      opacity var(--_button-motion-duration) var(--_button-motion-ease),
      transform var(--_button-motion-duration) var(--_button-motion-ease);
  }

  .lt-button:hover:not(:disabled) {
    background: var(--_button-hover-bg);
    border-color: var(--_button-hover-border);
    color: var(--_button-hover-text);
  }

  .lt-button:active:not(:disabled) {
    transform: translateY(var(--lt-button-active-translate-y, 1px));
  }

  .lt-button:disabled {
    opacity: var(--_button-disabled-opacity);
    cursor: not-allowed;
  }

  .lt-button:focus-visible {
    outline: none;
    box-shadow: var(--_button-shadow), var(--_button-focus-ring);
  }

  .lt-button--secondary {
    --_button-bg: var(--lt-button-secondary-bg, var(--lt-color-surface, #ffffff));
    --_button-border: var(--lt-button-secondary-border, var(--lt-color-border, #d0d7de));
    --_button-text: var(--lt-button-secondary-color, var(--lt-color-text, #1f2328));
    --_button-hover-bg: var(--lt-button-secondary-bg-hover, var(--lt-color-surface-hover, #f6f8fa));
    --_button-hover-border: var(--lt-button-secondary-border-hover, var(--lt-color-border, #d0d7de));
    --_button-hover-text: var(--lt-button-secondary-color-hover, var(--lt-color-text, #1f2328));
  }

  .lt-button--ghost {
    --_button-bg: var(--lt-button-ghost-bg, transparent);
    --_button-border: var(--lt-button-ghost-border, transparent);
    --_button-text: var(--lt-button-ghost-color, var(--lt-color-text, #1f2328));
    --_button-hover-bg: var(--lt-button-ghost-bg-hover, rgba(31, 35, 40, 0.06));
    --_button-hover-border: var(--lt-button-ghost-border-hover, transparent);
    --_button-hover-text: var(--lt-button-ghost-color-hover, var(--lt-color-text, #1f2328));
  }

  .lt-button--lg {
    --_button-height: var(--lt-button-height-lg, 3rem);
    --_button-padding-inline: var(--lt-button-padding-inline-lg, 1.25rem);
    --_button-font-size: var(--lt-button-font-size-lg, 1rem);
  }

  .lt-button--block {
    width: 100%;
  }
</style>
