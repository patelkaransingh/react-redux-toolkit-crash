import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todo-slice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-x-3 mt-12 mb-5 flex justify-center"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="sumbit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        +Add
      </button>
    </form>
  );
}
