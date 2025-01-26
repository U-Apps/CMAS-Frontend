import { create } from 'zustand';
import createClientSlice from './client-slice';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      ...createClientSlice(set),
    }),
    {
      name: 'app-state',
      getStorage: () => sessionStorage,
    }
  )
);

export default useStore;
