export const createSiteEngineerSlice = (set) => ({
    selectedSiteEngineer: null,
    pageSiteEngineer: 1,
    setPageSiteEngineer: (page) => set({ pageSiteEngineer: page }),
    setSelectedSiteEngineer: (site) => set({ selectedSiteEngineer: site }),
  });
  
   