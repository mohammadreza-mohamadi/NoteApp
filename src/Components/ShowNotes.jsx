import React from 'react'
import ShowNote from './ShowNote'
import NoteFilter from './NoteFilter'

function ShowNotes({notes,removeNoteHandler,activeHandler,setFilter}) {
  return (
    <div className="md:p-2 md:flex-1 rounded-xl">
        <NoteFilter setFilter={setFilter } />
        <table className="w-full text-left text-sm text-gray-500">
            <thead className='text-md md:text-xl uppercase text-gray-700 bg-gray-100  p-4 border-b border-gray-300'>
                <tr>
                      <th scope='col' className="px-3 py-1 md:px-6 md:py-3">#</th>
                      <th scope='col' className="px-3 py-1 md:px-6 md:py-3">title</th>
                      <th scope='col' className="px-3 py-1 md:px-6 md:py-3">description</th>
                      <th scope='col' className="px-3 py-1 md:px-6 md:py-3">Active</th>
                </tr>
            </thead>
            <tbody>
                
                {notes.length ? notes.map(note=><ShowNote key={note.id} activeHandler={activeHandler} note={note} removeNoteHandler={removeNoteHandler} />)
                     :<tr><td>Notes Empty</td></tr>}
            </tbody>
        </table>
    </div>
  )
}

export default ShowNotes