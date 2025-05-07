import { create } from "zustand";

export const useSetMobServiceMenu = create((set) => ({
  serviceMobMenuOpen: false,
  setServiceMobMenuOpen: (value) => set({ serviceMobMenuOpen: value })
}));
