import {
  getAllProjects,
  getCanceledProjects,
  getCompletedProjects,
  getUnderImplementationProjects,
} from '@/API/projectAPI';
import { useQuery } from 'react-query';

export function useGetAllProjects(params) {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: () => getAllProjects({ ...params, pageSize: 10 }),
    keepPreviousData: true,
  });
}

export function useGetCompletedProjects(params) {
  return useQuery({
    queryKey: ['completedProjects', params],
    queryFn: () => getCompletedProjects({ ...params, pageSize: 10 }),
    keepPreviousData: true,
  });
}

export function useGetCancelledProjects(params) {
  return useQuery({
    queryKey: ['cancelledProjects', params],
    queryFn: () => getCanceledProjects({ ...params, pageSize: 10 }),
    keepPreviousData: true,
  });
}

export function useGetUnderImplementationProjects(params) {
  return useQuery({
    queryKey: ['underImplementationProjects', params],
    queryFn: () => getUnderImplementationProjects({ ...params, pageSize: 10 }),
    keepPreviousData: true,
  });
}
