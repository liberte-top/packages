<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement> & {
    label?: string;
    required?: boolean;
    optional?: string;
    hint?: string;
    error?: string;
    children?: import("svelte").Snippet;
    labelContent?: import("svelte").Snippet;
    hintContent?: import("svelte").Snippet;
    errorContent?: import("svelte").Snippet;
  };

  let {
    label,
    required = false,
    optional,
    hint,
    error,
    children,
    labelContent,
    hintContent,
    errorContent,
    class: className = "",
    ...restProps
  }: Props = $props();
</script>

<div {...restProps} class={`lt-field ${className}`.trim()}>
  {#if label || labelContent}
    <div class="lt-field__label-row">
      <div class="lt-field__label">
        {#if labelContent}
          {@render labelContent()}
        {:else}
          <span>{label}</span>
        {/if}

        {#if required}
          <span class="lt-field__required" aria-hidden="true">*</span>
        {/if}
      </div>

      {#if optional}
        <span class="lt-field__optional">{optional}</span>
      {/if}
    </div>
  {/if}

  <div class="lt-field__control">
    {@render children?.()}
  </div>

  {#if error || errorContent}
    <div class="lt-field__message lt-field__message--error">
      {#if errorContent}
        {@render errorContent()}
      {:else}
        <span>{error}</span>
      {/if}
    </div>
  {:else if hint || hintContent}
    <div class="lt-field__message lt-field__message--hint">
      {#if hintContent}
        {@render hintContent()}
      {:else}
        <span>{hint}</span>
      {/if}
    </div>
  {/if}
</div>

<style>
  .lt-field {
    --_field-gap: var(--lt-field-gap, 0.5rem);
    --_field-label-gap: var(--lt-field-label-gap, 0.375rem);
    --_field-label-color: var(--lt-field-label-color, var(--lt-color-text, #1f2328));
    --_field-label-font-size: var(--lt-field-label-font-size, 0.875rem);
    --_field-label-font-weight: var(--lt-field-label-font-weight, var(--lt-font-weight-strong, 600));
    --_field-optional-color: var(--lt-field-optional-color, var(--lt-color-text-muted, #59636e));
    --_field-optional-font-size: var(--lt-field-optional-font-size, 0.8125rem);
    --_field-required-color: var(--lt-field-required-color, var(--lt-color-danger, #cf222e));
    --_field-message-font-size: var(--lt-field-message-font-size, 0.8125rem);
    --_field-hint-color: var(--lt-field-hint-color, var(--lt-color-text-muted, #59636e));
    --_field-error-color: var(--lt-field-error-color, var(--lt-color-danger, #cf222e));
    display: grid;
    gap: var(--_field-gap);
    min-width: 0;
  }

  .lt-field__label-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .lt-field__label {
    display: inline-flex;
    align-items: baseline;
    gap: var(--_field-label-gap);
    min-width: 0;
    color: var(--_field-label-color);
    font-size: var(--_field-label-font-size);
    font-weight: var(--_field-label-font-weight);
    line-height: 1.4;
  }

  .lt-field__optional {
    color: var(--_field-optional-color);
    font-size: var(--_field-optional-font-size);
    line-height: 1.4;
    white-space: nowrap;
  }

  .lt-field__required {
    color: var(--_field-required-color);
  }

  .lt-field__control {
    min-width: 0;
  }

  .lt-field__message {
    font-size: var(--_field-message-font-size);
    line-height: 1.5;
  }

  .lt-field__message--hint {
    color: var(--_field-hint-color);
  }

  .lt-field__message--error {
    color: var(--_field-error-color);
  }
</style>
