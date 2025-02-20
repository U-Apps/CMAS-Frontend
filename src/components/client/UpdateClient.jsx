/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import FieldInput from '../FieldInput';
import { useUpdateClient } from '../../queries/clientQuery';

const UpdateClient = ({ isOpen, closeForm, schema, title, client }) => {
  const updateClientMutation = useUpdateClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (client) {
      reset({
        id: client.id,
        fullName: client.fullName,
        email: client.email,
        phoneNumber: client.phoneNumber,
      });
    }
  }, [client, reset]);

  const handelUpdateClient = (data) => {
    updateClientMutation.mutate(data);
    reset();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"></div>

          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="bg-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center bg-blue-500 text-white px-4 py-2 rounded-lg mb-0 hover:bg-blue-600 transition-all">
                  {title}
                </h2>
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit(handelUpdateClient)}>
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

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition ml-2"
                      hidden={updateClientMutation.isPending}
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                      disabled={updateClientMutation.isPending}
                    >
                      {updateClientMutation.isPending
                        ? 'جارٍ التحميل...'
                        : 'حفظ'}
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

export default UpdateClient;

{
  /* <div className="relative">
        <button
          onClick={openAddFormClient}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          إضافة بيانات
        </button>

        <FormClient
          isOpen={addClient}
          closeForm={closeAddFormClient}
          schema={addClientSchema}
          title="إضافة عميل"
        />
      </div> */
}
