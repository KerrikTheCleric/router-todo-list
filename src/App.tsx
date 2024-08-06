import { ReactElement } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces";

export function App(): ReactElement {

  const exampleTodoList: ITodo[] = [
    {title: "Do the Thing"},
    {title: "Do the Thing"},
    {title: "Do the Thing"},
    {title: "Do the Thing"},
    {title: "Do the Thing"},
    {title: "Do the Thing"}
  ]

  return (
    <>
      <TodoList todos={exampleTodoList}/>
    </>
  );
}
