import { create } from "zustand";

export const useLoader = create((set) => ({
  isLoading: false,
  isRendering: false,
  setIsLoading: (value) => set({ isLoading: value }),
  setIsRendering: (value) => set({ isRendering: value })
}));
