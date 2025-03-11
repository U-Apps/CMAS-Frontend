import { useGetWorkerSpecialties } from "../../queries/workerSpecialtiesQuery";

function WorkerSpecialties() {
  const { data } = useGetWorkerSpecialties();

  return (
    <div>
      <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
        <option value="">اختر التخصص</option>

        {data?.data?.map((specialty) => (
          <option key={specialty.id} value={specialty.id}>
            {specialty.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default WorkerSpecialties;
