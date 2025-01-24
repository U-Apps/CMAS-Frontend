const createClientSlice = (set) => ({
  addClient: false,
  updateClient: false,

  openUpdateFormClient: () => set({ updateClient: true }),
  closeUpdateFormClient: () => set({ updateClient: false }),
  openAddFormClient: () => set({ addClient: true }),
  closeAddFormClient: () => set({ addClient: false }),
});

export default createClientSlice;
