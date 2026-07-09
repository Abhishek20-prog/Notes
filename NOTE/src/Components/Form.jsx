

const Form = () => {
   
    
  return (
  
    <div className=" h-[93%] w-[93%] flex flex-col gap-8 items-center justify-center p-3 mx-4 rounded-3xl">
        <form className="flex flex-col gap-4 p-4 mx-auto justify-center items-center border-gray-500 border-2 rounded-3xl bg-gray-600" >
            <input type="text" placeholder="Title"  />
            <textarea placeholder="Content"  />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-3xl">Add Note</button>
        </form>
        
    </div>
  )
}

export default Form