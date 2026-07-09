import { useState } from 'react'

const Form = () => {
   
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, content)
        setTitle('')
        setContent('')
    }
  return (
  
    <div className=" h-[93%] w-[93%] flex flex-col gap-8 items-center justify-center p-3 mx-4 rounded-3xl">
        <form className="flex flex-col gap-4 p-4 mx-auto justify-center items-center border-gray-500 border-2 rounded-3xl bg-gray-600" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-3xl">Add Note</button>
        </form>
        
    </div>
  )
}

export default Form