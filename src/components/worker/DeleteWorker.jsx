/* eslint-disable react/prop-types */
import { useDeleteWorker } from "../../queries/workerQuery";

const DeleteWorker = ({ isOpen, closeForm, title, Worker }) => {
  const deleteWorkerMutation = useDeleteWorker();

  const handleDeleteWorker = (id) => {
    console.log(Worker, "dd");
    deleteWorkerMutation.mutate(id);
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
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition ml-2"
                    hidden={deleteWorkerMutation.isPending}
                  >
                    إلغاء
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteWorker(Worker)}
                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                    disabled={deleteWorkerMutation.isPending}
                  >
                    {deleteWorkerMutation.isPending ? "جار الحذف..." : "حذف"}
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

export default DeleteWorker;
