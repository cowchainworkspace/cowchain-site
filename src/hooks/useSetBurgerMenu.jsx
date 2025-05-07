import { create } from "zustand";

export const useSetBurgerMenu = create((set) => ({
  burgerOpen: false,
  setBurgerOpen: (value) => set({ burgerOpen: value })
}));
