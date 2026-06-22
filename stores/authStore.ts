import { create } from "zustand";
import type { User } from "@/lib/types";

/**
 * Auth Store - PURE FRONTEND MODE
 * 
 * Authentication is disabled in pure frontend mode.
 * This store is kept for compatibility but always returns isLoggedIn: false
 */

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(() => ({
  user: null,
  token: null,
  isLoggedIn: false,

  setAuth: (_token, _user) => {
    // Disabled in pure frontend mode
  },

  logout: () => {
    // Disabled in pure frontend mode
  },
}));