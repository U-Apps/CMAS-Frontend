import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getWorkers,
  createWorker,
  updateWorker,
  deleteWorker,
} from "../API/workerAPI";
import { toast } from "sonner";
import useStore from "../store";

export function useGetWorkers(params) {
  return useQuery({
    queryKey: ["workers", params],
    queryFn: () => getWorkers({ ...params, pageSize: 10 }),
    staleTime: 600000,
    cacheTime: 1800000,
    keepPreviousData: true,
  });
}
// //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export function useRegisterWorker() {
  const { closeAddFormWorker, pageWorker } = useStore();
  const queryWorker = useQueryClient();

  return useMutation({
    mutationFn: (data) => createWorker(data),

    onSettled: async () => {
      await queryWorker.invalidateQueries({
        queryKey: ["Workers", pageWorker],
      });
    },
    onSuccess: () => {
      toast.success("تمت الإضافة بنجاح");
      closeAddFormWorker();
    },
    onError: (err) => {
      //   console.log(err.response.config);
      toast.error("حدث خطأ ما");
    },
  });
}

export function useUpdateWorker() {
  const { closeUpdateFormWorker, pageWorker } = useStore();
  const queryWorker = useQueryClient();

  return useMutation({
    mutationFn: (data) => updateWorker(data),

    onSettled: async () => {
      await queryWorker.invalidateQueries({
        queryKey: ["Workers", pageWorker],
      });
    },
    onSuccess: () => {
      toast.success("تمت التعديل بنجاح");
      closeUpdateFormWorker();
    },
    onError: () => {
      toast.error("حدث خطأ ما");
    },
  });
}
export function useDeleteWorker() {
  const { closeDeleteFormWorker, pageWorker } = useStore();
  const queryWorker = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteWorker(id),
    onSettled: async () => {
      await queryWorker.invalidateQueries({
        queryKey: ["Workers", pageWorker],
      });
    },
    onSuccess: () => {
      toast.success("تمت عملية الحذف بنجاح");
      closeDeleteFormWorker();
    },
    onError: () => {
      toast.error("حدف خطأ اثناء الحذف");
    },
  });
}

// export function useGetWorkerById(id) {
//   return useQuery({
//     queryKey: ["Worker", id],
//     queryFn: () => getWorkerById(id),
//     staleTime: 600000,
//     cacheTime: 1800000,
//   });
// }
