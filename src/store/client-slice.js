const createClientSlice = (set) => ({
  addClient: false,
  updateClient: false,
  pageClient: 1,

  openUpdateFormClient: () => set({ updateClient: true }),
  closeUpdateFormClient: () => set({ updateClient: false }),
  openAddFormClient: () => set({ addClient: true }),
  closeAddFormClient: () => set({ addClient: false }),
  setPageClient: (page) => set({ pageClient: page }),
});

export default createClientSlice;
