<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type LinkButtonVariant = "primary" | "secondary" | "ghost";
  type LinkButtonSize = "md" | "lg";

  type Props = HTMLAnchorAttributes & {
    variant?: LinkButtonVariant;
    size?: LinkButtonSize;
    block?: boolean;
    children?: import("svelte").Snippet;
  };

  let {
    variant = "primary",
    size = "md",
    block = false,
    children,
    class: className = "",
    href = "#",
    ...restProps
  }: Props = $props();
</script>

<a
  {...restProps}
  href={href}
  class={`lt-link-button lt-link-button--${variant} lt-link-button--${size} ${block ? "lt-link-button--block" : ""} ${className}`.trim()}
>
  {@render children?.()}
</a>

<style>
  .lt-link-button {
    --_link-button-height: var(--lt-button-height, var(--lt-control-height, 2.75rem));
    --_link-button-padding-inline: var(--lt-button-padding-inline, 1rem);
    --_link-button-gap: var(--lt-button-gap, 0.5rem);
    --_link-button-radius: var(--lt-button-radius, var(--lt-radius-md, 0.5rem));
    --_link-button-border-width: var(--lt-button-border-width, 1px);
    --_link-button-font-weight: var(--lt-button-font-weight, var(--lt-font-weight-strong, 600));
    --_link-button-font-size: var(--lt-button-font-size, 0.9375rem);
    --_link-button-line-height: var(--lt-button-line-height, 1);
    --_link-button-shadow: var(--lt-button-shadow, none);
    --_link-button-focus-ring: var(--lt-button-focus-ring, 0 0 0 3px rgba(31, 111, 235, 0.28));
    --_link-button-motion-duration: var(--lt-button-motion-duration, var(--lt-motion-duration-fast, 120ms));
    --_link-button-motion-ease: var(--lt-button-motion-ease, ease);
    --_link-button-bg: var(--lt-button-primary-bg, var(--lt-color-primary, #1f6feb));
    --_link-button-border: var(--lt-button-primary-border, var(--lt-color-primary, #1f6feb));
    --_link-button-text: var(--lt-button-primary-color, var(--lt-color-on-primary, #ffffff));
    --_link-button-hover-bg: var(--lt-button-primary-bg-hover, var(--lt-color-primary-hover, #1658b5));
    --_link-button-hover-border: var(--lt-button-primary-border-hover, var(--lt-color-primary-hover, #1658b5));
    --_link-button-hover-text: var(--lt-button-primary-color-hover, var(--lt-color-on-primary, #ffffff));
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--_link-button-gap);
    min-height: var(--_link-button-height);
    padding-inline: var(--_link-button-padding-inline);
    border: var(--_link-button-border-width) solid var(--_link-button-border);
    border-radius: var(--_link-button-radius);
    background: var(--_link-button-bg);
    color: var(--_link-button-text);
    font: inherit;
    font-size: var(--_link-button-font-size);
    font-weight: var(--_link-button-font-weight);
    line-height: var(--_link-button-line-height);
    text-decoration: none;
    box-shadow: var(--_link-button-shadow);
    transition:
      background-color var(--_link-button-motion-duration) var(--_link-button-motion-ease),
      border-color var(--_link-button-motion-duration) var(--_link-button-motion-ease),
      color var(--_link-button-motion-duration) var(--_link-button-motion-ease),
      box-shadow var(--_link-button-motion-duration) var(--_link-button-motion-ease),
      transform var(--_link-button-motion-duration) var(--_link-button-motion-ease);
  }

  .lt-link-button:hover {
    background: var(--_link-button-hover-bg);
    border-color: var(--_link-button-hover-border);
    color: var(--_link-button-hover-text);
    text-decoration: none;
  }

  .lt-link-button:active {
    transform: translateY(var(--lt-button-active-translate-y, 1px));
  }

  .lt-link-button:focus-visible {
    outline: none;
    box-shadow: var(--_link-button-shadow), var(--_link-button-focus-ring);
  }

  .lt-link-button--secondary {
    --_link-button-bg: var(--lt-button-secondary-bg, var(--lt-color-surface, #ffffff));
    --_link-button-border: var(--lt-button-secondary-border, var(--lt-color-border, #d0d7de));
    --_link-button-text: var(--lt-button-secondary-color, var(--lt-color-text, #1f2328));
    --_link-button-hover-bg: var(--lt-button-secondary-bg-hover, var(--lt-color-surface-hover, #f6f8fa));
    --_link-button-hover-border: var(--lt-button-secondary-border-hover, var(--lt-color-border, #d0d7de));
    --_link-button-hover-text: var(--lt-button-secondary-color-hover, var(--lt-color-text, #1f2328));
  }

  .lt-link-button--ghost {
    --_link-button-bg: var(--lt-button-ghost-bg, transparent);
    --_link-button-border: var(--lt-button-ghost-border, transparent);
    --_link-button-text: var(--lt-button-ghost-color, var(--lt-color-text, #1f2328));
    --_link-button-hover-bg: var(--lt-button-ghost-bg-hover, rgba(31, 35, 40, 0.06));
    --_link-button-hover-border: var(--lt-button-ghost-border-hover, transparent);
    --_link-button-hover-text: var(--lt-button-ghost-color-hover, var(--lt-color-text, #1f2328));
  }

  .lt-link-button--lg {
    --_link-button-height: var(--lt-button-height-lg, 3rem);
    --_link-button-padding-inline: var(--lt-button-padding-inline-lg, 1.25rem);
    --_link-button-font-size: var(--lt-button-font-size-lg, 1rem);
  }

  .lt-link-button--block {
    width: 100%;
  }
</style>
