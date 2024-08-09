import { ReactElement } from "react";
import  Todo  from "../components/Todo.tsx";
import { useTodoLogic } from "../hooks/useTodoLogic.ts";
import { ITodo } from "../interfaces.ts";

export function ListPage(): ReactElement {
  const { todos } = useTodoLogic();
  const { completeClick } = useTodoLogic();
  const { deleteClick } = useTodoLogic();
  const { editClick } = useTodoLogic();
  const { saveEditClick } = useTodoLogic();
  const { upwardClick } = useTodoLogic();
  const { downwardClick } = useTodoLogic();



  //console.log(todos);

   return (
    <section className="">
      {todos.map((t) => (
        <Todo todo={t} key={crypto.randomUUID()} onCompleteClick={completeClick} onDeleteClick={deleteClick} onEditClick={editClick} saveEditClick={saveEditClick} onUpwardClick={upwardClick} onDownwardClick={downwardClick}/>
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