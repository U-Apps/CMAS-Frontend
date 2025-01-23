
import { FaSearch } from 'react-icons/fa'
export default function SearchInput() {
    return (
        <div className='Search-group flex rounded-lg bg-blue-400 relative w-[250px] border border-gray-300  items-center  '>
            <input type="text" placeholder='Search' className='search-input border-none outline-none px-2 py-2 w-[250px] rounded ' />
            <FaSearch className='absolute top-3 right-2' color='gray' />
        </div>
      )
}
