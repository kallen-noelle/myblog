/**
 * Static data layer — pure frontend mode
 *
 * All data is loaded from /data/*.json files
 * No backend API calls are made
 */

const cache = new Map<string, unknown>();

function dataUrl(path: string): string {
  return `/data/${path}`;
}

/**
 * Always returns "static" mode for pure frontend
 */
export async function detectMode(): Promise<"static" | "live"> {
  return "static";
}

/**
 * Fetch data from local JSON files with caching
 */
export async function ensureData<T>(key: string): Promise<T | null> {
  const cached = cache.get(key);
  if (cached !== undefined) return cached as T;

  try {
    const res = await fetch(dataUrl(`${key}.json`));
    if (!res.ok) return null;
    const data = (await res.json()) as T;
    cache.set(key, data);
    return data;
  } catch {
    return null;
  }
}

/**
 * Fetch a detail object by type directory and id
 */
export async function getDetailData<T>(dir: string, id: number): Promise<T | null> {
  try {
    const res = await fetch(dataUrl(`${dir}/${id}.json`));
    return res.ok ? (await res.json() as T) : null;
  } catch {
    return null;
  }
}