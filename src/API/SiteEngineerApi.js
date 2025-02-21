import api from "@/lib/apiCall";

export async function GetEngineer(params){
    const respons= await  api.get('/api/v1/SiteEngineers', params);
    return respons.data;
}

export async function CreateEngineer(data){
    const respons= await  api.post('/api/v1/SiteEngineers', data);
    return respons.data;
}

export async function UpdateEngineer(data){
    const respons= await  api.put('/api/v1/SiteEngineers', data);
    return respons.data;
}

export async function DeleteEngineer(id){
    const respons= await  api.delete(`/api/v1/SiteEngineers/${id}`);
    return respons.data;
}