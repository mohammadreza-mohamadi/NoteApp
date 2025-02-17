import React from 'react'

export default function AddNote({note,noteAddHandler,setNote}) {
  return (
             <div className="not_Add p-3">
                 <h3 className='md:font-bold text-gray-500 md:text-lg mb-6'>
                     Add New Note
                 </h3>
                 <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-2">
                   <label htmlFor="title">title</label>
                   <input id="title" type="text" value={note.title} onChange={e=>setNote({...note,title:e.target.value})}  className="p-4 w-80 h-12 rounded-xl border"/>
                 </div>
                 <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <label htmlFor="description">description</label>
                  <input id="description" value={note.description} onChange={e=>setNote({...note,description:e.target.value})} type="text"  className="p-4 w-80 h-12 rounded-xl border" />
                 </div>
                 <button onClick={noteAddHandler} className="mt-6 p-4 rounded-xl w-52 md:w-80 h-14 bg-green-500 text-white font-bold hover:bg-white hover:border hover:border-green-500 hover:text-green-500 hover:cursor-pointer outline-0">Save</button>
              </div>
  )
}
