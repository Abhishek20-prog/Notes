import Form from './Components/Form'
import Sidebar from './Components/Sidebar'
import { useState } from 'react'
const App = () => {
const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);

  const openForm = () => {
    setShowForm(true);
  };

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    setShowForm(false);
  };
  
  return (
    <div className="h-screen bg-gray-800 text-amber-100 flex border-2 border-gray-500 items-center rounded-3xl"> 
       <Sidebar openForm={openForm} />

      <div className="flex-1 flex items-center justify-center">
        {showForm ? (
          <Form addNote={addNote} />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-gray-500 p-4 rounded-xl w-60 h-60 flex justify-center items-center flex-col gap-4 border-2 border-gray-200"
              >
                
                <h2 className="text-xl font-bold">Title: {note.title}</h2>
                <p className="text-gray-300">Note: {note.note}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      

    </div>
  )
}

export default App