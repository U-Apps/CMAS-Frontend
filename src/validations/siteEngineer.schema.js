import { z } from "zod";

export const SiteEngineerAddingFormSchema=z.object({
firstName:z.string({
    required_error:"الاسم الاول مطلوب",
    invalid_type_error:" الاول يجب أن يكون نصا",
 
}).nonempty('الاسم مطلوب').min(3,'يجب ان يحتوي على الاقل ٣ احرف '),
secondName:z.string({
    required_error:"  الاسم الثاني مطلوب",
    invalid_type_error:" الاسم الثاني يجب ان يكون نصا ",
   
}).nonempty('الاسم مطلوب').min(3,'يجب ان يحتوي على الاقل ٣ احرف '),
thirdName:z.string({
    required_error:" الاسم الثالث مطلوب",
    invalid_type_error:" الاسم الثالث يجب ان يكون نصا ",
    
}).nonempty('الاسم مطلوب').min(3,'يجب ان يحتوي على الاقل ٣ احرف '),

LastName:z.string({
    required_error:" الاسم الاخير مطلوب",
    invalid_type_error:" الاسم الاخير يجب ان يكون نصا ",
    
}).nonempty('الاسم مطلوب').min(3,'يجب ان يحتوي على الاقل ٣ احرف '),

email:z.string({
    required_error:" البريد الالكتروني مطلوب",
    invalid_type_error:" البريد الالكتروني يجب ان يكون نصا ",
}).nonempty('الايميل مطلوب').email('اعد كتابه الايميل بصوره صحيحه '),
phoneNumber:z.string({
    required_error:" رقم الهاتف مطلوب",
   
}).nonempty('الايميل مطلوب'),
address:z.string({
    required_error:" العنوان مطلوب",
    invalid_type_error:" العنوان يجب ان يكون نصا ",
}).nonempty('رقم الجوال مطلوب'),

city:z.string({
    required_error:" المدينة مطلوبة",
    invalid_type_error:" المدينة يجب ان تكون نصا ",
}).nonempty("المدينه مطلوبه")


})