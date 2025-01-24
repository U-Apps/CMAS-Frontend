import { create } from 'zustand';
import createClientSlice from './client-slice';

const useStore = create((...a) => ({
  ...createClientSlice(...a),
}));

export default useStore;
