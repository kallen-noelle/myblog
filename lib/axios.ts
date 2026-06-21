/**
 * Axios instance - PURE FRONTEND MODE
 * 
 * This file is kept for compatibility but all API calls
 * now use static data from /data/*.json files
 * 
 * No backend API calls are made
 */

// Stub API object for TypeScript compatibility
// All actual data fetching goes through lib/static-data.ts
const stubApi = {
  get: async <T, _R = T>(_url: string): Promise<T> => {
    return {} as T;
  },
  post: async <T, _R = T>(_url: string, _data?: unknown, _config?: unknown): Promise<T> => {
    return {} as T;
  },
  put: async <T, _R = T>(_url: string, _data?: unknown, _config?: unknown): Promise<T> => {
    return {} as T;
  },
  delete: async <T, _R = T>(_url: string, _config?: unknown): Promise<T> => {
    return {} as T;
  },
};

export default stubApi;