import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
export default function FilterType({filter}) {
    const [isOpenMenu,setIsOpenMenu] =useState(false)
    
    return (
  
       <div className="Filter flex justify-center">
          <div className="w-[100px]  bg-gray-600 py-3  rounded-[30px] ">
              <FaFilter className='w-[100px]' color='white' onClick={()=> setIsOpenMenu(!isopenmenu)} />
          </div>
          <div className={`filter__items absolute top-[110px] bg-gray-600 w-[200px] text-center rounded-lg text-white ${isopenmenu?"opacity-100":"opacity-0"} `}>
            {filter.map((items)=>(  <li key={items} className='list-none px-2 py-3 hover:bg-sky-600 hover:text-white '>{items}</li> ))}
            
    
          </div>
       </div>
  
 
    )
}
