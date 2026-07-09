import plus from "../assets/plus-svgrepo-com.svg"

const Sidebar = () => {
  return (
    <div className="h-[95%] w-30 border-2 border-gray-500 flex flex-col gap-8 items-center p-3 bg-gray-400 mx-4 rounded-3xl">
      <h1 className="text-2xl font-bold">Notes</h1>
      <button>
        <img src={plus} alt="plus" className="w-10 h-10" />
      </button>
    </div>
  )
}

export default Sidebar