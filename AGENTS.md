# Packages AGENTS Guide

## Current Flow
- This repository holds stable shared building blocks for `liberte-top` repositories.
- Current scope is TS-first shared npm packages for auth and OpenAPI/client concerns.
- Packages are consumed locally by path/link during active iteration.

## Repository Structure

```text
packages/
├── npm/
│   ├── auth/
│   │   ├── src/
│   │   └── package.json
│   └── shared/
│       ├── src/
│       │   ├── auth/
│       │   └── openapi/
│       └── package.json
├── package.json
├── pnpm-workspace.yaml
└── AGENTS.md
```

## Change Policy
- Add shared code only after the API shape is proven in a consuming app.
- Keep public APIs small; prefer adding capability later over speculative abstraction.
- Default to TS source exports without extra bundling during the current stage.
