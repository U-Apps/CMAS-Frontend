import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerClient, updateClient } from '../API/clientAPI';
import { toast } from 'sonner';
import useStore from '../store';

export function useRegisterClient() {
  const { closeUpdateFormClient } = useStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => registerClient(data),

    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: 'clients' });
    },
    onSuccess: () => {
      toast.success('تمت الإضافة بنجاح');
      closeUpdateFormClient();
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
