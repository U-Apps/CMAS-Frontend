import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getClients,
  registerClient,
  updateClient,
  deleteClient,
} from "../API/clientAPI";
import { toast } from "sonner";
import useStore from "../store";

export function useGetClients(pageNumber) {
  return useQuery({
    queryKey: ["clients", pageNumber],
    queryFn: () => getClients(pageNumber),
    staleTime: 600000,
    cacheTime: 1800000,
  });
}

export function useRegisterClient() {
  const { closeAddFormClient, pageClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => registerClient(data),

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["clients", pageClient],
      });
    },
    onSuccess: () => {
      toast.success("تمت الإضافة بنجاح");
      closeAddFormClient();
    },
    onError: () => {
      toast.error("حدث خطأ ما");
    },
  });
}

export function useUpdateClient() {
  const { closeUpdateFormClient, pageClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => updateClient(data),

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["clients", pageClient],
      });
    },
    onSuccess: () => {
      toast.success("تمت التعديل بنجاح");
      closeUpdateFormClient();
    },
    onError: () => {
      toast.error("حدث خطأ ما");
    },
  });
}

export function useDeleteClient() {
  const { closeDeleteFormClient, pageClient } = useStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteClient(id),
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["clients", pageClient],
      });
    },
    onSuccess: () => {
      toast.success("تمت عملية الحذف بنجاح");
      closeDeleteFormClient();
    },
    onError: () => {
      toast.error("حدف خطأ اثناء الحذف");
    },
  });
}
