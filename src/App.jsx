import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ClientDetails from "./ClientDetails";
import { addClientSchema } from "./validations/client";
import useStore from "./store";
import FormClient from "./components/client/FormClient";
import ClientsTable from "./components/ClientTable";
export default function App() {
  const { addClient, openAddFormClient, closeAddFormClient } = useStore();
  return (
    <>
      <ClientsTable />
      {/* <div className="relative">
        <button
          onClick={openAddFormClient}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          إضافة بيانات
        </button>

        <FormClient
          isOpen={addClient}
          closeForm={closeAddFormClient}
          schema={ClientSchema}
          title="إضافة عميل"
        />
      </div> */}
    </>
  );
}
