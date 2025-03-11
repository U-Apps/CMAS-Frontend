import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

export const workerSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  secondName: z.string(),
  thirdName: z.string(),
  lastName: z.string().min(1, "الاسم الأخير مطلوب"),
  phoneNumber: z.string().min(1, "رقم الهاتف مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional(),
  address: z.string().optional(),
  specialtyId: z.number().optional(),
  nationalNumber: z.string(),
});

export default workerSchema;
