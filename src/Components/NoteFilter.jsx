import React from 'react'

export default function NoteFilter({setFilter}) {
  return (
       <div className="flex flex-col md:flex-row justify-around items-center mb-6 gap-3">
           <button onClick={()=>setFilter('completed')} className='hover:cursor-pointer w-22 h-10 md:w-32 md:h-14 border rounded-xl bg-blue-400 outline-0 hover:border-blue-400 hover:bg-white hover:text-blue-400'>Completed</button>
           <button onClick={()=>setFilter('all')} className='hover:cursor-pointer w-22 h-10 md:w-32 md:h-14 border rounded-xl bg-yellow-400 outline-0 hover:border-yellow-400 hover:bg-white hover:text-yellow-400'>All</button>
           <button onClick={()=>setFilter('active')} className='hover:cursor-pointer w-22 h-10 md:w-32 md:h-14 border rounded-xl bg-green-400 outline-0 hover:border-green-400 hover:bg-white hover:text-green-400 '>active</button>
       </div>
  )
}
