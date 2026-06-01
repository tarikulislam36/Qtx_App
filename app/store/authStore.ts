import { create } from "zustand";

interface AppUser {
  _id: string;
  full_name: string;
  business_name: string;
}

interface AuthStore {
  firebaseUser: any;
  appUser: AppUser | null;

  setFirebaseUser: (user: any) => void;
  setAppUser: (user: AppUser | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  firebaseUser: null,
  appUser: null,

  setFirebaseUser: (firebaseUser) => set({ firebaseUser }),

  setAppUser: (appUser) => set({ appUser }),
}));
