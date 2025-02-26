import { useGetWorkers } from "../queries/workerQuery";
import useStore from "../store/worker-index";
import FormWorker from "../components/Worker/FormWorker";
import UpdateWorker from "../components/worker/UpdateWorker";
import {
  addWorkerSchema,
  updateWorkerSchema,
} from "../validations/worker.schema";
import DeleteWorker from "../components/worker/DeleteWorker";
import SearchInput from "../components/ui/SearchInput";
import { useState } from "react";

const Workers = () => {
  const {
    activeModal,
    openModal,
    closeModal,
    pageWorker,
    setPageWorker,
    setSelectedWorker,
    selectedWorker,
    clearSelectedWorker,
  } = useStore();

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetWorkers(pageWorker);

  const handelSearch = (search) => {
    setSearchInput(search);
  };
  const WorkersData = data?.data?.items || [];
  const totalCount = data?.data?.totalCount || 0;
  const resultData = WorkersData.filter((Worker) =>
    Worker.fullName.toLowerCase().includes(searchInput.toLowerCase())
  );
  const handleNextPage = () => {
    if (pageWorker * 10 < totalCount) {
      setPageWorker(pageWorker + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageWorker > 1) {
      setPageWorker(pageWorker - 1);
    }
  };

  const handelUpdate = (data) => {
    setSelectedWorker(data);
    openModal("updateWorker");
  };

  const handelDelete = (id) => {
    setSelectedWorker(id);
    openModal("deleteWorker");
  };

  return (
    <div className="p-4">
      <h1 className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center text-xl font-bold mb-4 hover:bg-blue-600 transition-all">
        صفحة العمال
      </h1>

      <div className="relative flex justify-between mb-4">
        <button
          onClick={openModal.bind(null, "addWorker")}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          إضافة عميل
        </button>

        <FormWorker
          isOpen={activeModal === "addWorker"}
          closeForm={closeModal}
          schema={addWorkerSchema}
          title="إضافة عامل"
        />
        <UpdateWorker
          Worker={selectedWorker}
          clear={clearSelectedWorker}
          isOpen={activeModal === "updateWorker"}
          closeForm={closeModal}
          schema={updateWorkerSchema}
          title="تعديل عميل"
        />
        <DeleteWorker
          Worker={selectedWorker}
          isOpen={activeModal === "deleteWorker"}
          closeForm={closeModal}
          title="حذف عميل"
        />
        <div className="">
          <SearchInput handelSearch={handelSearch} />
        </div>
      </div>
      <table className="table-auto border-collapse w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">الاسم الكامل</th>
            <th className="border border-gray-300 px-4 py-2">التخصص</th>
            <th className="border border-gray-300 px-4 py-2">حالة العامل</th>
            <th className="border border-gray-300 px-4 py-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5" className="text-center py-4">
                يرجى الإنتظار
              </td>
            </tr>
          ) : resultData.length > 0 ? (
            resultData.map((Worker) => (
              <tr key={Worker.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {Worker.fullName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {Worker.specialty}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {Worker.isAvailable ? "متاح" : "غير متاح"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handelUpdate(Worker)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-sm mr-2 hover:bg-yellow-600 ml-2"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handelDelete(Worker.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-sm hover:bg-red-600"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                لا يوجد عمال
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={pageWorker === 1 || isLoading}
          className={`px-4 py-2 rounded ${
            pageWorker === 1 || isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          السابق
        </button>
        <button
          onClick={handleNextPage}
          disabled={pageWorker * 10 >= totalCount || isLoading}
          className={`px-4 py-2 rounded ${
            pageWorker * 10 >= totalCount || isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default Workers;
