import { create } from "zustand";
import createClientSlice from "./client-slice";
import { persist } from "zustand/middleware";
import createModalSlice from "./modal-slice";
import createWorkerSlice from "./worker-slice";
import { createSiteEngineerSlice } from './siteEnginer-slice';

const useStore = create(
  persist(
    (set) => ({
      ...createClientSlice(set),
      ...createModalSlice(set),
      ...createWorkerSlice(set),
      ...createSiteEngineerSlice(set),
    }),
    {
      name: "app-state",
      getStorage: () => sessionStorage,
    }
  )
);

export default useStore;
