import { FaFilter } from 'react-icons/fa'
export default function FilterType({HandelValueSelect}) {
    // const [isOpenMenu,setIsOpenMenu] =useState(false)

    // code we have to put in display page 
    // const [selectedFilter,setSelectedFilter] = useState('');
    // const [filterdata,setFilterData] = useState([])
    // const handelFilterButtonToClick=(filter)=>{
    //   setSelectedFilter(filter)
    //   const filterResult=filterdata.filter((item)=>{
    //     if(filter=='all'){
    //       return true ;
    //     }
    //     else{
    //       //return by type that you want 
    //       return item.category===filter;
    //     }
    //   })
    //   setFilterdata(filterResult)
    // }
    
    const SelectChangedValue=(e)=>{
      HandelValueSelect(e.target.value)
    }
    return (
  
      //  <div className="Filter flex justify-center">
      //     <div className="w-[100px]  bg-gray-600 py-3  rounded-[30px] ">
      //         <FaFilter className='w-[100px]' color='white' onClick={()=> setIsOpenMenu(!isOpenMenu)} />
      //     </div>
      //     <div className={`filter__items absolute flex flex-col top-[110px] bg-gray-600 w-[200px] text-center rounded-lg text-white ${isOpenMenu?"opacity-100":"opacity-0"} `}>
      //       {filter.map((items,id)=>(  <button key={id} className='list-none px-2 py-3 hover:bg-sky-600 hover:text-white ' onClick={()=>{
      //         handelFilterButtonToClick(items)
      //       }} >{items}</button> ))}
            
    
      //     </div>
         
      //  </div>
  <div className='flex w-[200px] border border-gray-300 px-2 relative rounded-lg   ' >
  <FaFilter className='absolute top-[12px] right-2 ' color='gray' />
<select name="filter" id="" onChange={SelectChangedValue} className='appearance-none px-2 py-2   w-[200px] text-center outline-hidden ' >
<option value="all">all</option>
<option value="person">person</option>
<option value="company">company</option>
</select>
    </div>
 
    )
}
