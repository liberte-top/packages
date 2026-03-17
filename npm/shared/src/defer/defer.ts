export type Release = void | (() => void | Promise<void>);

export async function defer<T>(acquire: () => Release, run: () => Promise<T>): Promise<T> {
  const release = acquire();

  try {
    return await run();
  } finally {
    if (typeof release === "function") {
      await release();
    }
  }
}
