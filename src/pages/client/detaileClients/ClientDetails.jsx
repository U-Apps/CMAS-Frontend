import React, { useReducer } from 'react'
import { fetchDataReduser } from '../../../API/clients/clientDetails/clientDetails'
export default function ClientDetails() {
    const[dataform ,setDataForm]=useReducer(fetchDataReduser,{})
    const handelsubmit=(e) => {
   e.pereventDefault();
    PostDataForm('http://localhost:3000/clients',dataform)
    }
  return (
    <>
     <div className=" w-full h-screen ">
        <div className="warp container  mx-auto  py-10">
            <h1 className='text-3xl text-center font-bold py-5' >Client Details</h1>
            <form action="" onSubmit={handelsubmit} className='flex h-[60%] grid grid-cols-2 gap-10'>
                <div className="form-group flex  flex-col gap-y-2">
                    <span className=''>First name</span>
                    <input type="text" onChange={setDataForm} name='firstName'  className='border border-gray-300 py-[5px] px-2 rounded-md ' required/>
                </div>
                <div className="form-group flex   flex-col gap-y-2">
                    <span className=' '>Last name</span>
                    <input type="text" onChange={setDataForm} name='lastName' className='border border-gray-300 py-[5px] px-2 rounded-md '  required/>
                </div>
                <div className="form-group flex  flex-col gap-y-2">
                    <span className=' '>Email</span>
                    <input type="email" onChange={setDataForm} name='email' className='border border-gray-300 py-[5px] px-2 rounded-md ' required/>
                </div>
                <div className="form-group flex  flex-col gap-y-2">
                    <span className=' '>Phone</span>
                    <input type="tel" onChange={setDataForm} name='phone' className='border border-gray-300 py-[5px] px-2 rounded-md ' required/>
                </div>
                <div className="form-group flex  flex-col gap-y-2">
                    <span className=' '>countery</span>
                    <select onChange={setDataForm} name="conutry" id=""  className='border border-gray-300 py-[5px] px-2 rounded-md '>
                        <option value="">القوز </option>
                    </select>
                </div>
                <div className="form-group flex  flex-col gap-y-2">
                    <span className=' '>Currency</span>
                    <input type="text" onChange={setDataForm} name='current' className='border border-gray-300 py-[5px] px-2 rounded-md '  required/>
                </div>
                <div className="btns col-span-2 flex   gap-y-2 justify-end  gap-x-[15px]">
                    <button type="button" className='btn px-2 py-1 rounded  w-[100px] border border-gray-300 hover:bg-blue-400 hover:border-blue-500 '>update</button>
                    <button type="submit" className='btn px-2 py-1 rounded  w-[100px] border border-gray-300 hover:bg-blue-400 hover:border-blue-500 '>Save</button>
                </div>
            </form>
        </div>
     </div>
    
    
    </>
  )
}
