# @liberte-top/components

Internal Svelte components for `liberte-top` web projects.

Current scope is intentionally small:

- `Button`
- `LinkButton`
- `Input`
- `Card`
- `CardHeader`
- `Field`
- `Alert`
- `SectionLabel`

The package is optimized for local workspace consumption rather than broad framework compatibility.

Styling principles:

- CSS variables first
- Theme overrides should happen through tokens, not consumer-side selector patches
- Components own their structure; consuming apps should mainly provide semantic theme values

Token index lives in `packages/npm/components/TOKENS.md`.

Current token shape starts with a small semantic layer plus component tokens. Example:

```css
:root {
  --lt-color-primary: #1359d3;
  --lt-color-primary-hover: #0f4aaf;
  --lt-color-on-primary: #ffffff;
  --lt-color-surface: #ffffff;
  --lt-color-surface-hover: #f4f6f8;
  --lt-color-border: #c9d1db;
  --lt-color-text: #16202a;
  --lt-radius-md: 10px;

  --lt-button-height: 44px;
  --lt-button-primary-bg: var(--lt-color-primary);
  --lt-button-primary-bg-hover: var(--lt-color-primary-hover);
}
```

The intent is Ant Design-style tokenization without Ant Design's historical API and compatibility weight.
