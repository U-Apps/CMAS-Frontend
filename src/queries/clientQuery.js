import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerClient } from '../API/clientAPI';
import { toast } from 'sonner';
import useStore from '../store';

export function useRegisterClient() {
  const queryClient = useQueryClient();
  const { closeAddFormClient } = useStore();

  return useMutation({
    mutationFn: (data) => registerClient(data),

    onSettled: async (_, error) => {
      await queryClient.invalidateQueries({ queryKey: 'clients' });

      if (error) {
        toast.error('حدث خطأ أثناء تسجيل العميل');
      } else {
        toast.success('تم تسجيل العميل بنجاح');
        closeAddFormClient();
      }
    },

    onMutate: (data) => {
      const promise = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: data.fullName }), 2000)
        );

      toast.promise(promise(), {
        loading: 'جاري الإضافة',
        success: (data) => {
          return `${data.name} تم إضافة العميل بنجاح`;
        },
        error: 'حدث خطأ أثناء إضافة العميل',
      });
    },
  });
}
