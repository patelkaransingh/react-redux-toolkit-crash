import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //add todo
    addTodo: (state, action) => {
      //create obj to update state
      //may be some logic if required
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      //updating the state
      state.todos.push(todo);
    },

    //remove todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
