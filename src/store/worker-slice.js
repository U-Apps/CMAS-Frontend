const createWorkerSlice = (set) => ({
  selectedWorker: null,
  pageWorker: 1,

  setPageWorker: (page) => set({ pageWorker: page }),
  setSelectedWorker: (Worker) => set({ selectedWorker: Worker }),
});

export default createWorkerSlice;
