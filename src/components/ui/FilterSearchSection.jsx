import React from 'react'
import SearchInput from './SearchInput'
import FilterType from './Filtertype'


export default function FilterSearchSection() {
  return (
    <div className='flex justify-end py-3 px-2 shadow-md gap-x-10  w-full ' >
 <button className='px-2 py-1 rounded-md bg-blue-400 hover:bg-opacity-[0.30] transition-all '>Adding client</button>
 <SearchInput/>
 <FilterType filter={['Person','Componey']}/>

    </div>
  )
}
