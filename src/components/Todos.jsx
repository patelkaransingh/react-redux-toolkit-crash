import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todo-slice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.length > 0 && (
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-2 mx-auto flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-8/12"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
