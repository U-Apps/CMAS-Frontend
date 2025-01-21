import React from 'react';



export const fetchDataReduser=(status,event)=>{
 return{
    ...status,
        [event.target.name]:event.target.value,
    
 }

}

const PostDataForm=(url,formdata)=>{
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            firstName:formdata.firstName,
            lastName:formdata.lastName,
            email:formdata.email,
            phone:formdata.phone,
            country:formdata.country,
            current:formdata.current
        })
    })
}

