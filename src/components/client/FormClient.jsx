/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldInput from '../FieldInput';
import FieldRadio from '../FieldRadio';
import { useCreateClient } from '../../queries/clientQuery';

const FormClient = ({ isOpen, closeForm, schema, title }) => {
  const createClientMutation = useCreateClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handelAddClient = (data) => {
    const mappedData = {
      ...data,
      clientType: data.clientType === 'فرد' ? 1 : 2,
    };

    createClientMutation.mutate(mappedData);
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
                <form onSubmit={handleSubmit(handelAddClient)}>
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
                    value="فرد"
                  />

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition ml-2"
                      hidden={createClientMutation.isPending}
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                      disabled={createClientMutation.isPending}
                    >
                      حفظ
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
