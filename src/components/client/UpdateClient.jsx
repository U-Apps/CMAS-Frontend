/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { FaSpinner } from 'react-icons/fa';
import { useState } from 'react';
import FieldInput from '../FieldInput';
import FieldRadio from '../FieldRadio';

const FormClient = ({ isOpen, closeForm, schema, title, value }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"></div>

          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="bg-gray-200 p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-gray-800 text-center">
                  {title}
                </h2>
              </div>
              <div className="p-6 bg-gray-100 rounded-b-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FieldInput
                    id="name"
                    label="الاسم"
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="الاسم الكامل"
                    value={value.name}
                  />
                  <FieldInput
                    id="email"
                    label="البريد الإلكتروني"
                    type="email"
                    register={register}
                    errors={errors}
                    placeholder="example@email.com"
                    value={value.number}
                  />
                  <FieldRadio
                    name="customerType"
                    label="نوع العميل"
                    options={['منفرد', 'شركة']}
                    register={register}
                    errors={errors}
                    value={value.clientType}
                  />

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
                    >
                      {loading ? (
                        <FaSpinner className="animate-spin" size={26} />
                      ) : (
                        'حفظ'
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

export default FormClient;
