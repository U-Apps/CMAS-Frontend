import * as z from "zod";

export const addClientSchema = z.object({
  fullName: z
    .string({
      required_error: "الاسم مطلوب",
      invalid_type_error: "الاسم يجب أن يكون نصاً",
    })
    .nonempty("الاسم مطلوب")
    .min(3, "يجب أن يكون الاسم 3 أحرف على الأقل"),
  email: z
    .string({
      required_error: "البريد الإلكتروني مطلوب",
    })
    .email("يجب إدخال بريد إلكتروني صالح")
    .nonempty("البريد الإلكتروني مطلوب"),
  phoneNumber: z
    .string({
      required_error: "رقم الهاتف مطلوب",
      invalid_type_error: "رقم الهاتف يجب أن يكون نصاً",
    })
    .regex(/^\d{9}$/, "رقم الهاتف يجب أن يتكون من 9 أرقام "),
  clientType: z.enum(["فرد", "شركة"], {
    required_error: "يجب اختيار نوع العميل",
  }),
  id: z.number().optional(),
});

export const updateClientSchema = z.object({
  fullName: z
    .string({
      required_error: "الاسم مطلوب",
      invalid_type_error: "الاسم يجب أن يكون نصاً",
    })
    .nonempty("الاسم مطلوب")
    .min(3, "يجب أن يكون الاسم 3 أحرف على الأقل"),
  email: z
    .string({
      required_error: "البريد الإلكتروني مطلوب",
    })
    .email("يجب إدخال بريد إلكتروني صالح")
    .nonempty("البريد الإلكتروني مطلوب"),
  phoneNumber: z
    .string({
      required_error: "رقم الهاتف مطلوب",
      invalid_type_error: "رقم الهاتف يجب أن يكون نصاً",
    })
    .regex(/^\d{9}$/, "رقم الهاتف يجب أن يتكون من 9 أرقام "),

  id: z.number().optional(),
});
export const deleteClientSchema = z.object({
  fullName: z
    .string({
      required_error: "الاسم مطلوب",
      invalid_type_error: "الاسم يجب أن يكون نصاً",
    })
    .nonempty("الاسم مطلوب")
    .min(3, "يجب أن يكون الاسم 3 أحرف على الأقل"),
  id: z.number().optional(),
});
