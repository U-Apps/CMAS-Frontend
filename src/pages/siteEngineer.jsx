import { useEffect, useRef, useState } from 'react';
import useStore from '../store';
import { useGetSiteEngineer } from '@/queries/SiteEngineerQueries';
import DeleteSiteEngineer from '@/components/siteEngineer/DeleteSiteEngineer';
import FormSiteEngineer from '@/components/siteEngineer/FormSiteEngineer';
import { SiteEngineerAddingFormSchema } from '@/validations/siteEngineer.schema';
import UpdateSiteEngineer from '../components/siteEngineer/UpdateSiteEngineer';
import useSiteEngineerStore from '@/store/siteEngineer';
const SiteEngineer = () => {
  // const {
  //   activeModal,
  //   openModal,
  //   closeModal,
  //   pageClient,
  //   setPageClient,
  //   setSelectedClient,
  //   selectedClient,
  //   clearSelectedClient,
  // } = useStore();

const {activeModal,openModal,closeModal,pageSiteEngineer, setPageSiteEngineer, selectedSiteEngineer,setSelectedSiteEngineer}=useSiteEngineerStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data: siteEngineer, isLoading } = useGetSiteEngineer({
    pageNumber: pageSiteEngineer,
    searchTerm: debouncedSearch,
  });

  const siteEngineerData = siteEngineer?.data?.items || [];
  const totalCount = siteEngineer?.data?.totalPages;
  const handleNextPage = () => {
    if (pageSiteEngineer  < totalCount) {
      setPageSiteEngineer(pageSiteEngineer + 1);
      console.log(pageSiteEngineer);
    }
   
  };

  const handlePreviousPage = () => {
    if (pageSiteEngineer > 1) {
      setPageSiteEngineer(pageSiteEngineer - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.trim());

  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setDebouncedSearch('');
  
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handelUpdate = (data) => {
    setSelectedSiteEngineer(data)
    openModal('UpdateSiteEngineer');
  };

  const handelDelete = (id) => {
    setSelectedSiteEngineer(id);
    openModal('DeleteSiteEngineer');
  };

  return (
    <div className="p-4">
      <h1 className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center text-xl font-bold mb-4 hover:bg-blue-600 transition-all">
 صفحه المهندسين 
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

      </div>

      <div className="relative flex justify-end mb-4">
        <button
          onClick={openModal.bind(null, 'FormSiteEngineer')}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          إضافة بيانات
        </button>
        <FormSiteEngineer
          isOpen={activeModal === 'FormSiteEngineer'}
          closeForm={closeModal}
          schema={SiteEngineerAddingFormSchema}
          title="إضافة عميل"
        />
        <UpdateSiteEngineer
          siteEngineer={selectedSiteEngineer }
          isOpen={activeModal === 'UpdateSiteEngineer'}
          closeForm={closeModal}
          schema={SiteEngineerAddingFormSchema}
          title="تعديل عميل"
        />
        <DeleteSiteEngineer
          siteEngineer={selectedSiteEngineer}
          isOpen={activeModal === 'DeleteSiteEngineer'}
          closeForm={closeModal}
          title="حذف عميل"
        />
      </div>

      <table className="table-auto border-collapse w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">الاسم الكامل</th>
            <th className="border border-gray-300 px-4 py-2">لبريد الإلكتروني </th>
            <th className="border border-gray-300 px-4 py-2">رقم الهاتف</th>
            <th className="border border-gray-300 px-4 py-2">العنوان </th>
            <th className="border border-gray-300 px-4 py-2">الحاله</th>
            <th className="border border-gray-300 px-4 py-2">الاجراءات</th> 
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5" className="text-center py-4">
                يرجى الإنتظار...
              </td>
            </tr>
          ) : siteEngineerData.length > 0 ? (
            siteEngineerData.map((siteEngineer) => (
              <tr key={siteEngineer.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {siteEngineer.fullName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {siteEngineer.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {siteEngineer.phoneNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {siteEngineer.address?siteEngineer.address:'لا يتوفر'}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {siteEngineer.isAvailable?'متاح':'غير متاح '}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handelUpdate(siteEngineer)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 ml-2"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handelDelete(siteEngineer.id)}
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
          disabled={pageSiteEngineer === 1 || isLoading}
          className={`px-4 py-2 rounded ${
            pageSiteEngineer === 1 || isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          السابق
        </button>
        <button
          onClick={handleNextPage}
          disabled={pageSiteEngineer  >= totalCount || isLoading}
          className={`px-4 py-2 rounded ${
            pageSiteEngineer  >= totalCount || isLoading
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

export default SiteEngineer;
