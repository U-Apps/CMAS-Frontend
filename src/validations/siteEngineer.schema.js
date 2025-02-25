import { z } from "zod";

export const SiteEngineerAddingFormSchema=z.object({
   firstName :z.string(
    { required_error :"الاسم الاول مطلوب",
    invalid_type_error :" الاول يجب أن يكون نصا",
    }
).nonempty('الاسم مطلوب').min(3, 'يجب ان يحتوي على الاقل ٣ احرف '),
secondName :z.string(
    { required_error :"  الاسم الثاني مطلوب",
    invalid_type_error :" الاسم الثاني يجب ان يكون نصا ",
    }
).nonempty('الاسم مطلوب').min(3, 'يجب ان يحتوي على الاقل ٣ احرف '),
thirdName :z.string(
    { required_error :" الاسم الثالث مطلوب",
    invalid_type_error :" الاسم الثالث يجب ان يكون نصا ",
    }
).nonempty('الاسم مطلوب').min(3, 'يجب ان يحتوي على الاقل ٣ احرف '),
LastName :z.string(
    { required_error :" الاسم الاخير مطلوب",
    invalid_type_error :" الاسم الاخير يجب ان يكون نصا ",
    }
).nonempty('الاسم مطلوب').min(3, 'يجب ان يحتوي على الاقل ٣ احرف '),
email :z.string(
    { required_error :" البريد الالكتروني مطلوب",
    invalid_type_error :" البريد الالكتروني يجب ان يكون نصا ",
    }
).nonempty('الايميل مطلوب').email('اعد كتابه الايميل بصوره صحيحه '),
phoneNumber :z.string({ required_error :" رقم الهاتف مطلوب", }).nonempty('الايميل مطلوب').length(9, 'رقم الجوال يجب ان يحتوي على ٩ ارقام '),
address :z.string(
    { required_error :" العنوان مطلوب",
    invalid_type_error :" العنوان يجب ان يكون نصا ",
    }
).nonempty('العنوان مطلوب'),
nationalNumber :z.string(
    { required_error :" رقم الهوية مطلوب",
    invalid_type_error :" رقم الهوية يجب ان يكون رقما ",
    }
).nonempty('رقم الهوية مطلوب').length(12, 'الرقم الوطني يجب ان يحتوي على ١٢ رقماً'),
hireDate :z.string().refine(
    (date) => ! isNaN(Date.parse(date)),
    { message: "Invalid date",
    }
).transform((date) => new Date(date)),
}
)