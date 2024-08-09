import { ReactElement } from "react";
import { useTodoLogic } from "../hooks/useTodoLogic.ts";

//import { Button, EmployeeAvatar } from "../components";

export function AboutPage(): ReactElement {
  const { todos } = useTodoLogic();

  return (
    <section>
      <h1>This application lets you write down things for your todo list and organize them using various features.</h1>
      <h2>Current amount of Todos: {todos.length}</h2>
    </section>
  ); 

}