import { create } from 'zustand';
import createClientSlice from './client-slice';
import { persist } from 'zustand/middleware';
import createModalSlice from './modal-slice';

const useStore = create(
  persist((set) => ({
    ...createClientSlice(set),
    ...createModalSlice(set),
  }))
);

export default useStore;
