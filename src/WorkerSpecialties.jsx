import axios from "axios";
import { useEffect, useState } from "react";

function WorkerSpecialties() {
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://constructionmanagementassistant.runasp.net/api/v1/WorkerSpecialties"
      )
      .then((response) => {
        if (response.data.success) {
          setSpecialties(response.data.data);
        } else {
          throw new Error(response.data.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
        <option value="">اختر التخصص</option>

        {specialties.map((specialty) => (
          <option key={specialty.id} value={specialty.id}>
            {specialty.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default WorkerSpecialties;
