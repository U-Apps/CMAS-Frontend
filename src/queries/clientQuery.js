import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getClients, registerClient, updateClient } from '../API/clientAPI';
import { toast } from 'sonner';
import useStore from '../store';

export function useGetClients(pageNumber) {
  return useQuery({
    queryKey: ['clients', pageNumber],
    queryFn: () => getClients(pageNumber),
    staleTime: 600000,
    cacheTime: 1800000,
  });
}

export function useRegisterClient() {
  const { closeAddFormClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => registerClient(data),

    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: 'clients' });
    },
    onSuccess: () => {
      toast.success('تمت الإضافة بنجاح');
      closeAddFormClient();
    },
    onError: () => {
      toast.error('حدث خطأ ما');
    },
  });
}

export function useUpdateClient() {
  const { closeUpdateFormClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => updateClient(data),

    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: 'clients' });
    },
    onSuccess: () => {
      toast.success('تمت التعديل بنجاح');
      closeUpdateFormClient();
    },
    onError: () => {
      toast.error('حدث خطأ ما');
    },
  });
}
