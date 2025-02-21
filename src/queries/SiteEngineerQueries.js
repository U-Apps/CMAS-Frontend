import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import { QueryClient, useQueryClient } from "react-query";
import { GetEngineer,CreateEngineer,UpdateEngineer } from "@/API/SiteEngineerApi";
import { toast } from 'sonner';
export  function useGetSiteEngineer(params){
  return useQuery({
    queryKey:['site-engineer',params],
    queryFn:()=>GetEngineer({...params,
        pageSize:10
    
    }),
    staleTime:60000,
    cacheTime:1800000,
    keepPreviousData:true,
  })
}


export function useCreateSiteEngineer(){
    const queryClient=useQueryClient();
    const {pageClient } = useStore();
    return useMutation({
        mutationFn:(data)=>CreateEngineer(data),
        onSettled:()=>{
            queryClient.invalidateQueries(['site-engineer',{pageClient}])
        },
        onSuccess:()=>toast.success('Engineer was create successfully'),
        onError:()=>toast.error('Engineer was not created successfully')       
    })
}

export function useUpdateSiteEngineer(){

    const queryClient=useQueryClient();
    const {pageClient } = useStore();
    return useMutation({
        mutationFn:(data)=>UpdateEngineer(data),
        onSettled:()=>{
            queryClient.invalidateQueries(['site-engineer',{pageClient}])
        },
        onSuccess:()=>toast.success('Engineer was updated successfully'),
        onError:()=>toast.error('Engineer was not updated successfully')
    });
}