import { useQuery } from "react-query";
import { getWorkers } from "../API/workerSpecialtiesAPI";

export const useGetWorkerSpecialties = () => {
  return useQuery("workerSpecialties", getWorkers);
};
