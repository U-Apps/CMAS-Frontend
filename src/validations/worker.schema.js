import * as z from "zod";

export const addWorkerSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  secondName: z.string().min(1, "الاسم الثاني مطلوب"),
  thirdName: z.string().optional(),
  lastName: z.string().min(1, "الاسم الأخير مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  phoneNumber: z.string().min(10, "رقم الهاتف يجب أن يكون 10 أرقام"),
  nationalNumber: z.string().min(10, "الرقم الوطني يجب أن يكون 10 أرقام"),
  specialty: z.number().min(1, "التخصص مطلوب"),
  id: z.number().optional(),
});

export const updateWorkerSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  secondName: z.string().min(1, "الاسم الثاني مطلوب"),
  thirdName: z.string().optional(),
  lastName: z.string().min(1, "الاسم الأخير مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  phoneNumber: z.string().min(10, "رقم الهاتف يجب أن يكون 10 أرقام"),
  nationalNumber: z.string().min(10, "الرقم الوطني يجب أن يكون 10 أرقام"),
  specialty: z.number().min(1, "التخصص مطلوب"),
  id: z.number().optional(),
});
export const deleteWorkerSchema = z.object({
  fullName: z
    .string({
      required_error: "الاسم مطلوب",
      invalid_type_error: "الاسم يجب أن يكون نصاً",
    })
    .nonempty("الاسم مطلوب")
    .min(3, "يجب أن يكون الاسم 3 أحرف على الأقل"),
  id: z.number().optional(),
});
