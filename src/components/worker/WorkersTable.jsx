import { useEffect, useState } from "react";
import { getWorkers, deleteWorker } from "../../API/workerAPI";

const WorkersTable = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const data = await getWorkers(1);
        setWorkers(data);
      } catch (error) {
        console.error("Failed to fetch workers", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا العامل؟")) return;
    try {
      await deleteWorker(id);
      setWorkers(workers.filter((worker) => worker.id !== id));
    } catch (error) {
      console.error("Failed to delete worker", error);
    }
  };

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div>
      <h2>قائمة العمال</h2>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>المهنة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr key={worker.id}>
              <td>{worker.name}</td>
              <td>{worker.specialty}</td>
              <td>
                <button onClick={() => handleDelete(worker.id)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkersTable;
