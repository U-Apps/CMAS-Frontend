/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldInput from "../ui/FieldInput";
import { useRegisterWorker } from "../../queries/workerQuery";
// import FieldSelect from "../FieldSelect";
import FieldRadio from "../ui/FieldRadio";
import { useGetWorkerSpecialties } from "@/queries/workerSpecialtiesQuery";
import { useEffect, useState } from "react";

const FormWorker = ({ isOpen, closeForm, schema, title }) => {
  const createWorkerMutation = useRegisterWorker();
  const { data: special } = useGetWorkerSpecialties();
  const [idSpecial, setIdSpecial] = useState();

  useEffect(() => {
    console.log(idSpecial);
  }, [idSpecial]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handelAddWorker = (data) => {
    const mappedData = {
      ...data,
      specialtyId: parseInt(idSpecial),
    };
    createWorkerMutation.mutate(mappedData);
    // reset();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-20 backdrop-blur-xl z-20"></div>
          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 flex flex-col">
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center text-white">
                  {title}
                </h2>
              </div>
              <div className="p-6 flex-1">
                <form onSubmit={handleSubmit(handelAddWorker)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <FieldInput
                        id="firstName"
                        label="الاسم الأول"
                        type="text"
                        register={register}
                        errors={errors}
                        placeholder="الاسم الأول"
                      />
                      <FieldInput
                        id="secondName"
                        label="الاسم الثاني"
                        type="text"
                        register={register}
                        errors={errors}
                        placeholder="الاسم الثاني"
                      />
                      <FieldInput
                        id="thirdName"
                        label="الاسم الثالث"
                        type="text"
                        register={register}
                        errors={errors}
                        placeholder="الاسم الثالث (اختياري)"
                      />
                      <FieldInput
                        id="lastName"
                        label="الاسم الأخير"
                        type="text"
                        register={register}
                        errors={errors}
                        placeholder="الاسم الأخير"
                      />
                    </div>

                    {/* العمود الثاني */}
                    <div>
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
                      <FieldInput
                        id="nationalNumber"
                        label="الرقم الوطني"
                        type="text"
                        register={register}
                        errors={errors}
                        placeholder="الرقم الوطني"
                      />
                      <FieldInput
                        id="address"
                        label="العنوان"
                        type="text"
                        register={register}
                        errors={errors}
                        placeholder="العنوان"
                      />

                      <div>
                        <select
                          onChange={(e) => setIdSpecial(e.target.value)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">اختر التخصص</option>

                          {special?.data?.map((specialty) => (
                            <option key={specialty.id} value={specialty.id}>
                              {specialty.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <FieldRadio
                        name="isAvailable"
                        label="حالة التوفر"
                        options={["متاح", "غير متاح"]}
                        value={"متاح"}
                        register={register}
                        errors={errors}
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* أزرار الإجراءات (ثابتة في الأسفل) */}
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                    hidden={createWorkerMutation.isPending}
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                    disabled={createWorkerMutation.isPending}
                    // onClick={handleSubmit(handelAddWorker)}
                  >
                    {createWorkerMutation.isPending ? "جاري الحفظ..." : "حفظ"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormWorker;
