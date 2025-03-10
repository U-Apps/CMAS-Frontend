/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import FieldInput from '../ui/FieldInput';
import FieldRadio from '../ui/FieldRadio';
import { useCreateClient, useUpdateClient } from '../../queries/clientQuery';

const ClientForm = ({ isOpen, closeForm, schema, client, clear }) => {
  const createMutation = useCreateClient();
  const updateMutation = useUpdateClient();
  const mutation = client ? updateMutation : createMutation;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      clientType: 'فرد',
    },
  });

  useEffect(() => {
    if (client) {
      reset({
        id: client.id,
        fullName: client.fullName,
        email: client.email,
        phoneNumber: client.phoneNumber,
        clientType: client.clientType,
      });
    } else {
      reset({
        fullName: '',
        email: '',
        phoneNumber: '',
        clientType: 'فرد',
      });
    }
  }, [client, reset, isOpen]);

  const onSubmit = (data) => {
    const mappedData = {
      ...data,
      clientType: data.clientType === 'فرد' ? 1 : 2,
    };
    mutation.mutate(mappedData);
    reset();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"></div>

          <div className="fixed inset-x-0 top-10 bottom-10  flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="bg-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center bg-blue-500 text-white px-4 py-2 rounded-lg mb-0 hover:bg-blue-600 transition-all">
                  {client ? 'تعديل بيانات العميل' : 'إضافة بيانات العميل'}
                </h2>
              </div>
              <div className="px-6 py-3 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FieldInput
                    id="fullName"
                    label="الاسم"
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="الاسم الكامل"
                  />
                  <FieldInput
                    id="email"
                    label="البريد الإلكتروني"
                    type="email"
                    register={register}
                    errors={errors}
                    placeholder="example@email.com"
                  />
                  <FieldInput
                    id="phoneNumber"
                    label="رقم الهاتف"
                    type="tel"
                    register={register}
                    errors={errors}
                    placeholder="73XXXXXXX"
                  />
                  <FieldRadio
                    name="clientType"
                    label="نوع العميل"
                    options={['فرد', 'شركة']}
                    register={register}
                    errors={errors}
                    value={client?.clientType || 'فرد'}
                  />

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => {
                        clear(null);
                        closeForm();
                      }}
                      className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition ml-2"
                      hidden={mutation.isPending}
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? 'جارٍ التحميل...' : 'حفظ'}
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

export default ClientForm;
