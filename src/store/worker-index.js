import { create } from "zustand";
import createWorkerSlice from "./worker-slice";
import { persist } from "zustand/middleware";
import createModalSlice from "./modal-slice";

const useStore = create(
  persist(
    (set) => ({
      ...createWorkerSlice(set),
      ...createModalSlice(set),
    }),
    {
      name: "app-state",
      getStorage: () => sessionStorage,
    }
  )
);

export default useStore;
