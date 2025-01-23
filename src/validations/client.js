import * as z from 'zod';

export const addClientSchema = z.object({
  name: z
    .string({
      required_error: 'الاسم مطلوب',
      invalid_type_error: 'الاسم يجب أن يكون نصاً',
    })
    .nonempty('الاسم مطلوب')
    .min(3, 'يجب أن يكون الاسم 3 أحرف على الأقل'),
  email: z
    .string({
      required_error: 'البريد الإلكتروني مطلوب',
    })
    .email('يجب إدخال بريد إلكتروني صالح')
    .nonempty('البريد الإلكتروني مطلوب'),
  customerType: z.enum(['منظمة', 'منفرد'], {
    required_error: 'يجب اختيار نوع العميل',
  }),
});
