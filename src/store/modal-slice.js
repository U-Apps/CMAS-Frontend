const createModalSlice = (set) => ({
  activeModal: null,
  openModal: (modalName) => set({ activeModal: modalName }),
  closeModal: () => set({ activeModal: null }),
});

export default createModalSlice;
