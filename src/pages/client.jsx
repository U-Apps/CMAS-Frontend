import { useState } from 'react';
import { useGetClients } from '../queries/clientQuery';
import useStore from '../store';
import FormClient from '../components/client/FormClient';
import UpdateClient from '../components/client/UpdateClient';
import {
  addClientSchema,
  updateClientSchema,
} from '../validations/client.schema';

const Clients = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    addClient,
    updateClient,
    openAddFormClient,
    closeAddFormClient,
    openUpdateFormClient,
    closeUpdateFormClient,
  } = useStore();

  const { data, isLoading } = useGetClients(pageNumber);
  const [clients, setClients] = useState([]);

  const clientsData = data?.data?.items || [];
  const totalCount = data?.data?.totalCount || 0;

  const handleNextPage = () => {
    if (pageNumber * 10 < totalCount) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  const handleDelete = (id) => {
    console.log(`Deleting client with id: ${id}`);
  };
  {
    console.log(clientsData);
  }

  return (
    <div className="p-4">
      <div className="relative">
        <button
          onClick={openAddFormClient}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          إضافة بيانات
        </button>

        <button
          onClick={openUpdateFormClient}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          تعديل بيانات
        </button>

        <FormClient
          isOpen={addClient}
          closeForm={closeAddFormClient}
          schema={addClientSchema}
          title="إضافة عميل"
        />
        <UpdateClient
          client={clients}
          isOpen={updateClient}
          closeForm={closeUpdateFormClient}
          schema={updateClientSchema}
          title="تعديل عميل"
        />
      </div>
      <table className="table-auto border-collapse w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">الاسم الكامل</th>
            <th className="border border-gray-300 px-4 py-2">
              لبريد الإلكتروني
            </th>
            <th className="border border-gray-300 px-4 py-2">رقم الهاتف</th>
            <th className="border border-gray-300 px-4 py-2">نوع العميل</th>
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
          ) : clientsData.length > 0 ? (
            clientsData.map((client) => (
              <tr key={client.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {client.fullName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {client.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {client.phoneNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {client.clientType}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => setClients(client)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                لا يوجد عملاء
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={pageNumber === 1 || isLoading}
          className={`px-4 py-2 rounded ${
            pageNumber === 1 || isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          السابق
        </button>
        <button
          onClick={handleNextPage}
          disabled={pageNumber * 10 >= totalCount || isLoading}
          className={`px-4 py-2 rounded ${
            pageNumber * 10 >= totalCount || isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default Clients;
