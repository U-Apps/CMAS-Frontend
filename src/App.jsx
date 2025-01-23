import { addClientSchema } from './validations/client';
import ReusableFormModal from './components/ui/ReusableFormModal';
import useStore from './store';

export default function App() {
  const { isOpen, openForm, closeForm } = useStore();

  return (
    <>
      <div className="relative">
        <button
          onClick={openForm}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          إضافة بيانات
        </button>

        <ReusableFormModal
          isOpen={isOpen}
          closeForm={closeForm}
          schema={addClientSchema}
          title="إضافة عميل"
        />
      </div>
    </>
  );
}
