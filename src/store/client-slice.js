const createClientSlice = (set) => ({
  selectedClient: null,
  pageClient: 1,

  setPageClient: (page) => set({ pageClient: page }),
  setSelectedClient: (client) => set({ selectedClient: client }),
  clearSelectedClient: () => set({ selectedClient: null }),
});

export default createClientSlice;
