<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type AlertTone = "info" | "success" | "error";

  type Props = HTMLAttributes<HTMLDivElement> & {
    tone?: AlertTone;
    children?: import("svelte").Snippet;
  };

  let {
    tone = "info",
    children,
    class: className = "",
    ...restProps
  }: Props = $props();
</script>

<div {...restProps} class={`lt-alert lt-alert--${tone} ${className}`.trim()}>
  {@render children?.()}
</div>

<style>
  .lt-alert {
    --_alert-radius: var(--lt-alert-radius, var(--lt-radius-md, 0.5rem));
    --_alert-padding-block: var(--lt-alert-padding-block, 0.75rem);
    --_alert-padding-inline: var(--lt-alert-padding-inline, 0.75rem);
    --_alert-font-size: var(--lt-alert-font-size, 0.875rem);
    --_alert-line-height: var(--lt-alert-line-height, 1.5);
    --_alert-bg: var(--lt-alert-info-bg, var(--lt-color-success-surface, #dafbe1));
    --_alert-border: var(--lt-alert-info-border, var(--lt-color-success-border, #aceebb));
    --_alert-color: var(--lt-alert-info-color, var(--lt-color-success, #1a7f37));
    border: 1px solid var(--_alert-border);
    border-radius: var(--_alert-radius);
    padding: var(--_alert-padding-block) var(--_alert-padding-inline);
    background: var(--_alert-bg);
    color: var(--_alert-color);
    font-size: var(--_alert-font-size);
    line-height: var(--_alert-line-height);
  }

  .lt-alert--success,
  .lt-alert--info {
    --_alert-bg: var(--lt-alert-success-bg, var(--lt-color-success-surface, #dafbe1));
    --_alert-border: var(--lt-alert-success-border, var(--lt-color-success-border, #aceebb));
    --_alert-color: var(--lt-alert-success-color, var(--lt-color-success, #1a7f37));
  }

  .lt-alert--error {
    --_alert-bg: var(--lt-alert-error-bg, var(--lt-color-danger-surface, #ffebe9));
    --_alert-border: var(--lt-alert-error-border, var(--lt-color-danger-border, #ffcecb));
    --_alert-color: var(--lt-alert-error-color, var(--lt-color-danger, #cf222e));
  }
</style>
