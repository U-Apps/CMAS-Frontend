import { useQuery } from "@tanstack/react-query";
import { getWorkers } from "../API/workerSpecialtiesAPI";

export const useGetWorkerSpecialties = () => {
  return useQuery({
    queryKey: ["workerSpecialties"],
    queryFn: () => getWorkers(),
  });
};
