export type ErrorFactory = () => Error;
export type FailureEffect = () => void;

function runFailure(onFailure?: FailureEffect) {
  onFailure?.();
}

function ensureBase(condition: unknown, createError: ErrorFactory, onFailure?: FailureEffect): asserts condition {
  if (!condition) {
    runFailure(onFailure);
    throw createError();
  }
}

function nonNull<T>(value: T | null | undefined, createError: ErrorFactory, onFailure?: FailureEffect): T {
  if (value == null) {
    runFailure(onFailure);
    throw createError();
  }

  return value;
}

function nonEmpty<T extends string | readonly unknown[]>(value: T | null | undefined, createError: ErrorFactory, onFailure?: FailureEffect): T {
  if (value == null || value.length === 0) {
    runFailure(onFailure);
    throw createError();
  }

  return value;
}

export const ensure = Object.assign(ensureBase, {
  nonNull,
  nonEmpty,
});
