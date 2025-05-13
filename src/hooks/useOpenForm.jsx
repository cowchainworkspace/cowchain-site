import { create } from "zustand";

export const useOpenForm = create((set) => ({
  openForm: false,
  setOpenForm: (value) => set({ openForm: value })
}));
