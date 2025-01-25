import { ClientSchema } from './validations/client';
import useStore from './store';
import FormClient from './components/client/FormClient';
import { Toaster } from 'sonner';

export default function App() {
  const { addClient, openAddFormClient, closeAddFormClient } = useStore();
  return (
    <>
      <div className="relative">
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
        <Toaster richColors />
      </div>
    </>
  );
}
