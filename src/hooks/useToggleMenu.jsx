import { create } from "zustand";

export const useToggleMenu = create((set) => ({
  toggleMenu: false,
  setToggleMenu: (value) => set({ toggleMenu: value })
}));
