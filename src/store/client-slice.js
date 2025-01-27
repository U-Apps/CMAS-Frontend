const createClientSlice = (set) => ({
  addClient: false,
  updateClient: false,
  deleteClient: false,
  pageClient: 1,
  openDeleteFormClient: () => set({ deleteClient: true }),
  closeDeleteFormClient: () => set({ deleteClient: false }),
  openUpdateFormClient: () => set({ updateClient: true }),
  closeUpdateFormClient: () => set({ updateClient: false }),
  openAddFormClient: () => set({ addClient: true }),
  closeAddFormClient: () => set({ addClient: false }),
  setPageClient: (page) => set({ pageClient: page }),
});

export default createClientSlice;
