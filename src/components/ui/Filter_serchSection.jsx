import React from 'react'
import SerachInput from './SerachInput'
import Filtertype from './Filtertype'

export default function Filter_serchSection() {
  return (
    <div className='flex justify-end py-3 px-2 shadow-md gap-x-10  w-full ' >
 <button className='px-2 py-1 rounded-md bg-blue-400 hover:bg-opacity-[0.30] transition-all '>Adding client</button>
 <SerachInput/>
 <Filtertype filter={[persone,componey]} />

    </div>
  )
}
