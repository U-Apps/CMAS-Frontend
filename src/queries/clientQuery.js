import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '../API/clientAPI';
import { toast } from 'sonner';
import useStore from '../store';

export function useGetClients(params) {
  return useQuery({
    queryKey: ['clients', params],
    queryFn: () => getClients({ ...params, pageSize: 10 }),
    staleTime: 600000,
    cacheTime: 1800000,
    keepPreviousData: true,
  });
}

export function useCreateClient() {
  const { closeModal, pageClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createClient(data),

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['clients', pageClient],
      });
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      closeModal();
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export function useUpdateClient() {
  const { closeModal, pageClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => updateClient(data),

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['clients', pageClient],
      });
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      closeModal();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export function useDeleteClient() {
  const { closeModal, pageClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteClient(id),
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['clients', pageClient],
      });
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      closeModal();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}
