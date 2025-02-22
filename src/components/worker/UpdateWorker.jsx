/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import FieldInput from "../FieldInput";
import { useUpdateWorker } from "../../queries/workerQuery";
import FieldSelect from "../FieldSelect";
import FieldRadio from "../FieldRadio";
import { useGetWorkerSpecialties } from "../../queries/workerSpecialtiesQuery";
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
        isAvailable: worker.isAvailable === 1 ? "متاح" : "غير متاح",
      });
    }
  }, [worker, reset]);
  const handelUpdateWorker = (data) => {
    const mappedData = {
      ...data,
      isAvailable: data.isAvailable === "متاح" ? 1 : 2,
    };
    updateWorkerMutation.mutate(mappedData);
    reset();
  };

  return (
    <>
      {isOpen && (
        <>
          {/* الخلفية المعتمة */}
          <div className="fixed inset-0 bg-opacity-20 backdrop-blur-xs z-20"></div>

          {/* النموذج */}
          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 flex flex-col">
              {/* عنوان النموذج */}
              <div className="bg-blue-500 p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center text-white">
                  {title}
                </h2>
              </div>

              {/* جسم النموذج مع تقسيم أفقي */}
              <div className="p-6 flex-1">
                <form onSubmit={handleSubmit(handelUpdateWorker)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* العمود الأول */}
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
                    hidden={updateWorkerMutation.isPending}
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                    disabled={updateWorkerMutation.isPending}
                    onClick={handleSubmit(handelUpdateWorker)}
                  >
                    {updateWorkerMutation.isPending
                      ? "جاري التحديث..."
                      : "تحديث"}
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

export default UpdateWorker;
