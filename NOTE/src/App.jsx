import Form from './Components/Form'
import Sidebar from './Components/Sidebar'
import { useState } from 'react'
const App = () => {
  return (
    <div className="h-screen bg-gray-800 text-amber-50 flex border-2 border-gray-500 items-center rounded-3xl"> 
      <Sidebar />
        <Form/>
      

    </div>
  )
}

export default App