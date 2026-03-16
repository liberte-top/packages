export type FetchLike = typeof fetch;

export type FetchJsonResult<T> = {
  response: Response;
  data: T;
};

export type FetchJsonInput = {
  path: string;
  method?: string;
  body?: unknown;
};

export async function fetch_json<T>(fetchFn: FetchLike, input: FetchJsonInput): Promise<FetchJsonResult<T>> {
  const response = await fetchFn(input.path, {
    method: input.method || "GET",
    headers: input.body ? { "content-type": "application/json" } : undefined,
    body: input.body ? JSON.stringify(input.body) : undefined,
  });

  const data = (await response.json()) as T;
  return { response, data };
}
