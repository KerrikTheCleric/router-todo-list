import { ITodoContext } from "../interfaces";
import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider.tsx";

export function useTodoLogic(): ITodoContext {
  return useContext(TodoContext);
}