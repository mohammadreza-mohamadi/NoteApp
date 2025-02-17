import { use, useState } from 'react'

import './App.css'
import AddNote from './Components/AddNote'
import ShowNotes from './Components/ShowNotes'

function App() {
  const [notes,setNotes] =useState([])
  const [note,setNote] = useState({id:notes.length + Math.floor(Math.random()*10000),title:"",description:"",active:false})
  const [filter,setFilter] = useState('')
  const noteAddHandler =()=>{
    if(note.title.length && note.description.length)
    {
       setNotes([...notes,note])
       setNote({...note,id:notes.length + Math.floor(Math.random()*10000),title:'',description:""})
    }
    
  }

  const removeNoteHandler = (id)=>{
     let notes_filter = notes.filter(note=>note.id !== id)
     setNotes(notes_filter)
  }

  const activeHandler = (notee)=>{
    const newNotes = notes.map(note=>{
      if(note.id === notee.id)
         return{...note,active:!notee.active}
      return note;
    })
    setNotes(newNotes)
  }
  const FilterHandler =(FILTER)=>{
    if(filter.length)
    {
      
      switch(FILTER)
      {
        case "all" :
          return notes;
          
        case "completed":
          return notes.filter(note=>note.active==true)
        
        case "active":
          return notes.filter(note=>note.active==false)
          
      }
    }
  }
  return (
    <>
      {console.log(filter)}
       <div className="container mx-auto w-5/6 md:w-4/6 p-4">
           <h2 className='text-lg md:text-xl text-center font-bold font-semibold text-gray-700 p-3 border-b border-gray-300'>NoteApp({notes.length})</h2>
           <div className="flex flex-col p-4 md:flex-row justify-between gap-8">
              <AddNote note={note} noteAddHandler={noteAddHandler} setNote={setNote} />
              <ShowNotes notes={filter ? FilterHandler(filter) : notes} removeNoteHandler={removeNoteHandler} activeHandler={activeHandler} setFilter={setFilter} />
           </div>
       </div>
    </>
  )
}

export default App
