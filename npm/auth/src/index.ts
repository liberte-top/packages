export type AuthSnapshot = {
  ready: boolean;
  authenticated: boolean;
  subject: string | null;
  authType: string | null;
  scopes: string[];
  etag: string | null;
  updatedAt: string | null;
};

export type CreateAuthOptions = {
  authDomain: string;
  storageKey?: string;
  endpointPath?: string;
  fetchImpl?: typeof fetch;
  storage?: Pick<Storage, "getItem" | "setItem" | "removeItem">;
};

type AuthContextPayload = {
  subject?: string | null;
  auth_type?: string | null;
  scopes?: string[];
};

const DEFAULT_ENDPOINT_PATH = "/api/v1/context";

function normalizeDomain(authDomain: string): string {
  if (/^https?:\/\//.test(authDomain)) {
    return authDomain.replace(/\/$/, "");
  }
  return `https://${authDomain.replace(/\/$/, "")}`;
}

function createStorageKey(authDomain: string): string {
  return `liberte.auth.${authDomain}`;
}

function parseStoredSnapshot(raw: string | null): AuthSnapshot | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as AuthSnapshot;
    if (!Array.isArray(parsed.scopes)) return null;
    return {
      ready: Boolean(parsed.ready),
      authenticated: Boolean(parsed.authenticated),
      subject: parsed.subject ?? null,
      authType: parsed.authType ?? null,
      scopes: parsed.scopes,
      etag: parsed.etag ?? null,
      updatedAt: parsed.updatedAt ?? null,
    };
  } catch {
    return null;
  }
}

function emptySnapshot(etag: string | null = null): AuthSnapshot {
  return {
    ready: false,
    authenticated: false,
    subject: null,
    authType: null,
    scopes: [],
    etag,
    updatedAt: null,
  };
}

export function createAuth(options: CreateAuthOptions) {
  const authOrigin = normalizeDomain(options.authDomain);
  const endpointPath = options.endpointPath ?? DEFAULT_ENDPOINT_PATH;
  const fetchImpl = options.fetchImpl ?? fetch;
  const storage = options.storage ?? globalThis.localStorage;
  const storageKey = options.storageKey ?? createStorageKey(options.authDomain);

  let snapshot = parseStoredSnapshot(storage?.getItem(storageKey) ?? null) ?? emptySnapshot();

  const persist = () => {
    storage?.setItem(storageKey, JSON.stringify(snapshot));
  };

  const scopes = {
    any(required: string[]) {
      return required.some((scope) => snapshot.scopes.includes(scope));
    },
    all(required: string[]) {
      return required.every((scope) => snapshot.scopes.includes(scope));
    },
  };

  const refresh = async () => {
    const headers: Record<string, string> = {};
    if (snapshot.etag) {
      headers["If-None-Match"] = snapshot.etag;
    }

    const response = await fetchImpl(`${authOrigin}${endpointPath}`, {
      credentials: "include",
      headers,
    });

    if (response.status === 304) {
      snapshot = {
        ...snapshot,
        ready: true,
        updatedAt: new Date().toISOString(),
      };
      persist();
      return snapshot;
    }

    if (response.status === 401) {
      snapshot = {
        ...emptySnapshot(response.headers.get("ETag")),
        ready: true,
        updatedAt: new Date().toISOString(),
      };
      persist();
      return snapshot;
    }

    if (!response.ok) {
      throw new Error(`auth refresh failed: ${response.status}`);
    }

    const payload = (await response.json()) as AuthContextPayload;
    snapshot = {
      ready: true,
      authenticated: Boolean(payload.subject),
      subject: payload.subject ?? null,
      authType: payload.auth_type ?? null,
      scopes: payload.scopes ?? [],
      etag: response.headers.get("ETag"),
      updatedAt: new Date().toISOString(),
    };
    persist();
    return snapshot;
  };

  const getSnapshot = () => snapshot;

  return {
    refresh,
    snapshot: getSnapshot,
    scopes,
  };
}
