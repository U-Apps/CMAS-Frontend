import { useEffect, useRef, useState } from 'react';
import { useGetClients } from '../queries/clientQuery';
import useStore from '../store';
import FormClient from '../components/client/FormClient';
import UpdateClient from '../components/client/UpdateClient';
import {
  addClientSchema,
  updateClientSchema,
} from '../validations/client.schema';
import DeleteClient from '../components/client/DeleteClient';

const Clients = () => {
  const {
    activeModal,
    openModal,
    closeModal,
    pageClient,
    setPageClient,
    setSelectedClient,
    selectedClient,
    clearSelectedClient,
  } = useStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [clientType, setClientType] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data: clients, isLoading } = useGetClients({
    pageNumber: pageClient,
    searchTerm: debouncedSearch,
    clientType: clientType === null ? undefined : clientType,
  });

  const clientsData = clients?.data?.items || [];
  const totalCount = clients?.data?.totalCount;

  const handleNextPage = () => {
    if (pageClient * 10 < totalCount) {
      setPageClient(pageClient + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageClient > 1) {
      setPageClient(pageClient - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setDebouncedSearch('');
    setClientType(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClientTypeChange = (event) => {
    const selectedType = event.target.value
      ? parseInt(event.target.value)
      : null;
    setClientType(selectedType);
  };
  const handelUpdate = (data) => {
    setSelectedClient(data);
    console.log(data);
    openModal('updateClient');
  };

  const handelDelete = (id) => {
    setSelectedClient(id);
    openModal('deleteClient');
  };

  return (
    <div className="p-4">
      <h1 className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center text-xl font-bold mb-4 hover:bg-blue-600 transition-all">
        صفحة العملاء
      </h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          ref={inputRef}
          onChange={handleSearchChange}
          placeholder="ابحث عن اسم عميل..."
          className="border p-2 rounded-lg w-64"
        />
        <button
          onClick={handleClearSearch}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          إلغاء
        </button>

        <select
          value={clientType || ''}
          onChange={handleClientTypeChange}
          className="border p-2 rounded-lg"
        >
          <option value=""> الكل</option>
          <option value="1">فرد</option>
          <option value="2">شركة</option>
        </select>
      </div>

      <div className="relative flex justify-end mb-4">
        <button
          onClick={openModal.bind(null, 'addClient')}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          إضافة بيانات
        </button>
        <FormClient
          isOpen={activeModal === 'addClient'}
          closeForm={closeModal}
          schema={addClientSchema}
          title="إضافة عميل"
        />
        <UpdateClient
          client={selectedClient}
          clear={clearSelectedClient}
          isOpen={activeModal === 'updateClient'}
          closeForm={closeModal}
          schema={updateClientSchema}
          title="تعديل عميل"
        />
        <DeleteClient
          client={selectedClient}
          isOpen={activeModal === 'deleteClient'}
          closeForm={closeModal}
          title="حذف عميل"
        />
      </div>

      <table className="table-auto border-collapse w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">الاسم الكامل</th>
            <th className="border border-gray-300 px-4 py-2">
              البريد الإلكتروني
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
                يرجى الإنتظار...
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
                    onClick={() => handelUpdate(client)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 ml-2"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handelDelete(client.id)}
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
          disabled={pageClient === 1 || isLoading}
          className={`px-4 py-2 rounded ${
            pageClient === 1 || isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          السابق
        </button>
        <button
          onClick={handleNextPage}
          disabled={pageClient * 10 >= totalCount || isLoading}
          className={`px-4 py-2 rounded ${
            pageClient * 10 >= totalCount || isLoading
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
