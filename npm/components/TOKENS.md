# Token Index

This file is only an index.

Detailed token behavior should stay close to the owning component so the real source of truth remains in code.

Principles:

- semantic tokens first
- component tokens second
- consumer apps should override tokens, not component selectors

Current semantic token index:

- `--lt-color-*`: brand, surface, text, border
- `--lt-radius-*`: shared radii
- `--lt-control-*`: shared control sizing
- `--lt-font-weight-*`: emphasis levels
- `--lt-motion-*`: timing and easing

Current component token index:

- `--lt-alert-*`: see `src/lib/components/Alert.svelte`
- `--lt-button-*`: see `src/lib/components/Button.svelte`
- `--lt-card-*`: see `src/lib/components/Card.svelte`
- `--lt-card-header-*`: see `src/lib/components/CardHeader.svelte`
- `--lt-field-*`: see `src/lib/components/Field.svelte`
- `--lt-input-*`: see `src/lib/components/Input.svelte`
- `--lt-link-button-*`: see `src/lib/components/LinkButton.svelte`
- `--lt-section-label-*`: see `src/lib/components/SectionLabel.svelte`

When a new component is added, list its token prefix here and keep the detailed mapping inside the component source.
