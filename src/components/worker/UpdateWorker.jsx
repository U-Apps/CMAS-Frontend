/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import FieldInput from "../FieldInput";
import { useUpdateWorker } from "../../queries/workerQuery";
import FieldSelect from "../FieldSelect";
import FieldRadio from "../FieldRadio";
const UpdateWorker = ({ isOpen, closeForm, schema, title, worker }) => {
  const updateWorkerMutation = useUpdateWorker();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (worker) {
      reset({
        id: worker.id,
        firstName: worker.firstName,
        secondName: worker.secondName,
        thirdName: worker.thirdName,
        lastName: worker.lastName,
        email: worker.email,
        phoneNumber: worker.phoneNumber,
        nationalNumber: worker.nationalNumber,
        specialty: worker.specialty,
        isAvailable: worker.isAvailable,
      });
    }
  }, [worker, reset]);

  const handelUpdateWorker = (data) => {
    updateWorkerMutation.mutate(data);
    reset();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs z-20"></div>

          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="bg-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center bg-blue-500 text-white px-4 py-2 rounded-lg mb-0 hover:bg-blue-600 transition-all">
                  {title}
                </h2>
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit(handelUpdateWorker)}>
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
                  <FieldSelect
                    id="specialty"
                    label="التخصص"
                    register={register}
                    errors={errors}
                    options={[
                      { value: 1, label: "هندسة مدنية" },
                      { value: 2, label: "هندسة كهربائية" },
                      { value: 3, label: "هندسة ميكانيكية" },
                    ]}
                  />
                  <FieldRadio
                    name="isAvailable"
                    label="حالة التوفر"
                    options={["متاح", "غير متاح"]}
                    value={"متاح"}
                    register={register}
                    errors={errors}
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition ml-2"
                      disabled={updateWorkerMutation.isPending}
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                      disabled={updateWorkerMutation.isPending}
                    >
                      {updateWorkerMutation.isPending
                        ? "جاري التحديث..."
                        : "تحديث"}
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

export default UpdateWorker;
