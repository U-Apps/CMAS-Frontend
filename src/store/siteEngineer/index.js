import { create } from 'zustand';
import { createSiteEngineerSlice } from './siteEnginer-slice';
import { persist } from 'zustand/middleware';
import createModalSlice from '../modal-slice';

 const useSiteEngineerStore = create(
  persist(
    (set) => ({
      ...createSiteEngineerSlice(set),
      ...createModalSlice(set),
    }),
    {
      name: 'app-state-siteEngineer',
      getStorage: () => sessionStorage,
    }
  )
);

export default useSiteEngineerStore;
