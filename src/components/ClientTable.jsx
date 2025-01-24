import React from "react";

const ClientTable = () => {
  // بيانات ثابتة
  const clients = [
    { id: 1, fullName: "أحمد محمد", jobType: "مبرمج" },
    { id: 2, fullName: "سعاد علي", jobType: "محاسبة" },
    { id: 3, fullName: "خالد صالح", jobType: "مصمم" },
  ];

  const handleEdit = (id) => {
    alert(`تعديل العميل برقم: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا العميل؟")) {
      alert(`تم حذف العميل برقم: ${id}`);
    }
  };

  return (
    <div className="p-4" dir="rtl">
      <h1 className="text-2xl font-bold mb-4 text-center">قائمة العملاء</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200 bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-center text-sm font-semibold">
                الاسم الكامل
              </th>
              <th className="px-4 py-2 border text-center text-sm font-semibold">
                نوع العميل
              </th>
              <th className="px-4 py-2 border text-center text-sm font-semibold">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 text-center">
                <td className="px-4 py-2 border text-sm">{client.fullName}</td>
                <td className="px-4 py-2 border text-sm">{client.jobType}</td>
                <td className="px-4 py-2 border flex justify-center gap-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-all"
                    onClick={() => handleEdit(client.id)}
                  >
                    تعديل
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-all"
                    onClick={() => handleDelete(client.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* small screen */}
      <div className="grid gap-4 md:hidden">
        {clients.map((client) => (
          <div
            key={client.id}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
          >
            <p className="text-sm">
              <span className="font-bold">الاسم الكامل: </span>
              {client.fullName}
            </p>
            <p className="text-sm">
              <span className="font-bold">نوع العميل: </span>
              {client.jobType}
            </p>
            <div className="mt-2 flex justify-between gap-2">
              <button
                className="bg-green-700 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition-all"
                onClick={() => handleEdit(client.id)}
              >
                تعديل
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-all"
                onClick={() => handleDelete(client.id)}
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTable;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ClientsTable = () => {
//   const [clients, setClients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetch("http://constructionmanagementassistant.runasp.net")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch clients");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setClients(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800">قائمة العملاء</h1>
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full border-collapse border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border bg-blue-500 text-white text-center">
//                   الاسم الكامل
//                 </th>
//                 <th className="px-4 py-2 border bg-blue-500 text-white text-center">
//                   نوع العميل
//                 </th>
//                 <th className="px-4 py-2 border bg-blue-500 text-white text-center">
//                   التفاصيل
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {clients.map((client) => (
//                 <tr key={client.id} className="even:bg-gray-100">
//                   <td className="px-4 py-2 border text-center text-gray-700">
//                     {client.fullName}
//                   </td>
//                   <td className="px-4 py-2 border text-center text-gray-700">
//                     {client.jobType}
//                   </td>
//                   <td className="px-4 py-2 border text-center">
//                     <button
//                       onClick={() => navigate(`/details/${client.id}`)}
//                       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                     >
//                       عرض التفاصيل
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientsTable;
