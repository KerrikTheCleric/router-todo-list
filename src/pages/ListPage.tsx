import { ReactElement } from "react";
import  Todo  from "../components/Todo.tsx";
import { useTodoLogic } from "../hooks/useTodoLogic.ts";
import { ITodo } from "../interfaces.ts";

export function ListPage(): ReactElement {
  const { todos } = useTodoLogic();
  const { completeClick } = useTodoLogic();
  const { deleteClick } = useTodoLogic();

  //console.log(todos);

   return (
    <section className="">
      {todos.map((t) => (
        <Todo todo={t} key={t.title} onCompleteClick={completeClick} onDeleteClick={deleteClick} />
      ))}
    </section>
  ); 

  /* const testTodo: ITodo = {
    title:  "titleInputValue",
    isComplete: false,
    timestamp: new Date(),
    author: "authorInputValue"
  };
   return (
    <section className="">
      <Todo todo={testTodo} key={testTodo.title} onCompleteClick={completeClick} onDeleteClick={deleteClick} />
    </section>
  );  */
}