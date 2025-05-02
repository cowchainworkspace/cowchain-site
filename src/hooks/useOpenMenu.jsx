import { create } from "zustand";

export const useOpenMenu = create((set) => ({
  serviceMenuOpen: false,
  setServiceMenuOpen: (value) => set({ serviceMenuOpen: value })
}));
