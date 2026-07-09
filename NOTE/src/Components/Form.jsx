import { useState } from "react";

const Form = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title: title,
      note: note,
    };

    addNote(newNote);

    setTitle("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center"
    >
      <input
        type="text"
        placeholder="Enter your Title"
        className="border-2 border-gray-500 rounded px-3 py-2 text-white bg-gray-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter your Note"
        className="border-2 border-gray-500 rounded px-3 py-2 text-white bg-gray-700"
        rows="4"
        cols="50"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="bg-blue-300 text-gray-800 px-4 py-2 rounded"
      >
        Add Note
      </button>
    </form>
  );
};

export default Form;