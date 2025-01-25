import * as z from 'zod';

export const ClientSchema = z.object({
  fullName: z
    .string({
      required_error: 'الاسم مطلوب',
      invalid_type_error: 'الاسم يجب أن يكون نصاً',
    })
    .nonempty('الاسم مطلوب')
    .min(3, 'يجب أن يكون الاسم 3 أحرف على الأقل'),
  Email: z
    .string({
      required_error: 'البريد الإلكتروني مطلوب',
    })
    .email('يجب إدخال بريد إلكتروني صالح')
    .nonempty('البريد الإلكتروني مطلوب'),
  PhoneNumber: z
    .string({
      required_error: 'رقم الهاتف مطلوب',
      invalid_type_error: 'رقم الهاتف يجب أن يكون نصاً',
    })
    .regex(/^\d{9}$/, 'رقم الهاتف يجب أن يتكون من 9 أرقام '),
  clientType: z.enum(['منفرد', 'منظمة'], {
    required_error: 'يجب اختيار نوع العميل',
  }),
});
