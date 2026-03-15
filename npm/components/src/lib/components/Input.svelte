<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type InputSize = "md" | "lg";

  type Props = Omit<HTMLInputAttributes, "size"> & {
    size?: InputSize;
  };

  let {
    size = "md",
    class: className = "",
    type = "text",
    ...restProps
  }: Props = $props();
</script>

<input
  {...restProps}
  type={type}
  class={`lt-input lt-input--${size} ${className}`.trim()}
/>

<style>
  .lt-input {
    --_input-height: var(--lt-input-height, var(--lt-control-height, 2.75rem));
    --_input-padding-inline: var(--lt-input-padding-inline, 0.75rem);
    --_input-radius: var(--lt-input-radius, var(--lt-radius-md, 0.5rem));
    --_input-border-width: var(--lt-input-border-width, 1px);
    --_input-font-size: var(--lt-input-font-size, 0.9375rem);
    --_input-line-height: var(--lt-input-line-height, 1.4);
    --_input-bg: var(--lt-input-bg, var(--lt-color-surface, #ffffff));
    --_input-border: var(--lt-input-border, var(--lt-color-border, #d0d7de));
    --_input-color: var(--lt-input-color, var(--lt-color-text, #1f2328));
    --_input-placeholder-color: var(--lt-input-placeholder-color, var(--lt-color-text-muted, #59636e));
    --_input-shadow: var(--lt-input-shadow, none);
    --_input-hover-border: var(--lt-input-border-hover, var(--lt-color-border-strong, #8c959f));
    --_input-focus-border: var(--lt-input-border-focus, var(--lt-color-primary, #1f6feb));
    --_input-focus-shadow: var(--lt-input-focus-shadow, 0 0 0 3px rgba(31, 111, 235, 0.15));
    --_input-disabled-bg: var(--lt-input-bg-disabled, var(--lt-color-fill-muted, #f6f8fa));
    --_input-disabled-border: var(--lt-input-border-disabled, var(--lt-color-border, #d0d7de));
    --_input-disabled-color: var(--lt-input-color-disabled, var(--lt-color-text-subtle, #8c959f));
    --_input-motion-duration: var(--lt-input-motion-duration, var(--lt-motion-duration-fast, 120ms));
    --_input-motion-ease: var(--lt-input-motion-ease, ease);
    box-sizing: border-box;
    width: 100%;
    min-height: var(--_input-height);
    padding-inline: var(--_input-padding-inline);
    border: var(--_input-border-width) solid var(--_input-border);
    border-radius: var(--_input-radius);
    background: var(--_input-bg);
    color: var(--_input-color);
    font: inherit;
    font-size: var(--_input-font-size);
    line-height: var(--_input-line-height);
    box-shadow: var(--_input-shadow);
    transition:
      border-color var(--_input-motion-duration) var(--_input-motion-ease),
      box-shadow var(--_input-motion-duration) var(--_input-motion-ease),
      background-color var(--_input-motion-duration) var(--_input-motion-ease),
      color var(--_input-motion-duration) var(--_input-motion-ease);
  }

  .lt-input::placeholder {
    color: var(--_input-placeholder-color);
  }

  .lt-input:hover:not(:disabled) {
    border-color: var(--_input-hover-border);
  }

  .lt-input:focus {
    outline: none;
    border-color: var(--_input-focus-border);
    box-shadow: var(--_input-shadow), var(--_input-focus-shadow);
  }

  .lt-input:disabled {
    background: var(--_input-disabled-bg);
    border-color: var(--_input-disabled-border);
    color: var(--_input-disabled-color);
    cursor: not-allowed;
  }

  .lt-input--lg {
    --_input-height: var(--lt-input-height-lg, 3rem);
    --_input-padding-inline: var(--lt-input-padding-inline-lg, 0.875rem);
    --_input-font-size: var(--lt-input-font-size-lg, 1rem);
  }
</style>
