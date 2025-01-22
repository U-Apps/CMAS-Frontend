/* eslint-disable react/prop-types */
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';
import { FaSpinner } from 'react-icons/fa';

const schema = z.object({
  name: z
    .number({
      required_error: 'الاسم مطلوب',
      invalid_type_error: 'الاسم يجب أن يكون نصاً',
    })
    .nonempty('الاسم مطلوب')
    .min(3, 'يجب أن يكون الاسم 3 أحرف على الأقل'),
  email: z
    .string({
      required_error: 'البريد الإلكتروني مطلوب',
    })
    .email('يجب إدخال بريد إلكتروني صالح'),
  customerType: z.enum(['منفرد', 'منظمة'], {
    required_error: 'يجب اختيار نوع العميل',
  }),
});

const FormModal = ({ isOpen, closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState();

  const onSubmit = async () => {
    try {
      setLoading(true);
      // const { data: res } = await api.post('/auth/sign-up', data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            onClick={closeForm}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
          ></div>

          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="bg-gray-200 p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-gray-800 text-center">
                  إضافة عميل
                </h2>
              </div>

              <div className="p-6 bg-gray-100 rounded-b-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1 text-right"
                    >
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...register('name')}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-right"
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1 text-right"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      {...register('email')}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-right"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <fieldset className="mb-4">
                    <legend className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      نوع العميل
                    </legend>
                    <label>
                      <input
                        type="radio"
                        value="منفرد"
                        {...register('customerType', { required: true })}
                      />
                      منفرد
                    </label>

                    <label>
                      <input
                        type="radio"
                        value="منظمة"
                        {...register('customerType', { required: true })}
                      />
                      منظمة
                    </label>
                    {errors.customerType && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.customerType.message}
                      </p>
                    )}
                  </fieldset>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                      hidden={loading}
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                      disabled={loading}
                    >
                      {loading ? (
                        <FaSpinner className="animate-spin" size={26} />
                      ) : (
                        'إضافة'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormModal;

{
  /* <div className="relative">
      <button
        onClick={openForm}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        إضافة بيانات
      </button>

      <FormModal isOpen={isOpen} closeForm={closeForm} />
    </div> */
  // const [isOpen, setIsOpen] = useState(false);
  // const openForm = () => {
  //   setIsOpen(true);
  // };
  // const closeForm = () => {
  //   setIsOpen(false);
  // };
}
