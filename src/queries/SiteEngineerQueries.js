import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import useStore from '../store';
import { GetEngineer,CreateEngineer,UpdateEngineer,DeleteEngineer } from "@/API/SiteEngineerApi";
import { toast } from 'sonner';
import useSiteEngineerStore from "@/store/siteEngineer";
export  function useGetSiteEngineer(params){
  return useQuery({
    queryKey:['site-engineer',params],
    queryFn:()=>GetEngineer({...params,pageSize:10}),
    staleTime:60000,
    cacheTime:1800000,
    keepPreviousData: true,
  })
}
export function useCreateSiteEngineer(){
    const queryClient=useQueryClient();
    const {pageSiteEngineer } = useSiteEngineerStore();
    return useMutation({
        mutationFn:(data)=>CreateEngineer(data),
        onSettled:()=>{
            queryClient.invalidateQueries(['site-engineer',pageSiteEngineer])
        },
        onSuccess:()=>toast.success('Engineer was create successfully'),
        onError:()=>toast.error('Engineer was not created successfully')       
    })
}

export function useUpdateSiteEngineer(){
    const queryClient=useQueryClient();
    const {pageSiteEngineer } = useSiteEngineerStore();
    return useMutation({
        mutationFn:(data)=>UpdateEngineer(data),
        onSettled:()=>{
            queryClient.invalidateQueries(['site-engineer',pageSiteEngineer])
        },
        onSuccess:()=>toast.success('Engineer was updated successfully'),
        onError:()=>toast.error('Engineer was not updated successfully')
    });
}

export function UseDeleteSiteEngine(){
    const queryClient=useQueryClient();
    const {pageClient } = useStore();  
    return useMutation({
        mutationFn:(id)=>DeleteEngineer(id),
        onSettled:()=>{
            queryClient.invalidateQueries(['site-engineer',pageClient])
        },
        onSuccess:()=>toast.success('Engineer was deleted successfully'),
        onError:()=>toast.error('Engineer was not deleted successfully')
    })
}