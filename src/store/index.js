import { create } from 'zustand';

const useStore = create((set) => ({
  isOpen: false,
  openForm: () => set({ isOpen: true }),
  closeForm: () => set({ isOpen: false }),
}));

export default useStore;
