// const Table = ({}) => {
//   return (
//     <>
//       <table className="table-auto border-collapse w-full border border-gray-300 shadow-md">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 px-4 py-2">الاسم الكامل</th>
//             <th className="border border-gray-300 px-4 py-2">
//               لبريد الإلكتروني
//             </th>
//             <th className="border border-gray-300 px-4 py-2">رقم الهاتف</th>
//             <th className="border border-gray-300 px-4 py-2">نوع العميل</th>
//             <th className="border border-gray-300 px-4 py-2">إجراءات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {isLoading ? (
//             <tr>
//               <td colSpan="5" className="text-center py-4">
//                 يرجى الإنتظار
//               </td>
//             </tr>
//           ) : clientsData.length > 0 ? (
//             clientsData.map((client) => (
//               <tr key={client.id}>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {client.fullName}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {client.email}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {client.phoneNumber}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {client.clientType}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   <button
//                     onClick={() => handelUpdate(client)}
//                     className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 ml-2"
//                   >
//                     تعديل
//                   </button>
//                   <button
//                     onClick={() => handleDelete(client.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                   >
//                     حذف
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center py-4">
//                 لا يوجد عملاء
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={handlePreviousPage}
//           disabled={pageClient === 1 || isLoading}
//           className={`px-4 py-2 rounded ${
//             pageClient === 1 || isLoading
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-blue-500 text-white hover:bg-blue-600"
//           }`}
//         >
//           السابق
//         </button>
//         <button
//           onClick={handleNextPage}
//           disabled={pageClient * 10 >= totalCount || isLoading}
//           className={`px-4 py-2 rounded ${
//             pageClient * 10 >= totalCount || isLoading
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-blue-500 text-white hover:bg-blue-600"
//           }`}
//         >
//           التالي
//         </button>
//       </div>
//     </>
//   );
// };
// export default Table;
