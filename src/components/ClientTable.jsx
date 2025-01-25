import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientsTable = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Deleting client with id: ${id}`);
  };

  useEffect(() => {
    axios
      .get("http://constructionmanagementassistant.runasp.net")
      .then((response) => {
        setClients(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">قائمة العملاء</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-blue-500 text-white text-center">
                  الاسم الكامل
                </th>
                <th className="px-4 py-2 border bg-blue-500 text-white text-center">
                  نوع العميل
                </th>
                <th className="px-4 py-2 border bg-blue-500 text-white text-center">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="even:bg-gray-100">
                  <td className="px-4 py-2 border text-center text-gray-700">
                    {client.fullName}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-700">
                    {client.jobType}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => navigate(`/edit/${client.id}`)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition mx-1"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mx-1"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientsTable;

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
