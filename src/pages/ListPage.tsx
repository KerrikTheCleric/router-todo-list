import { ReactElement } from "react";
import Todo from "../components/Todo.tsx";
import { useTodoLogic } from "../hooks/useTodoLogic.ts";
import ListPageButtonSection from "../components/ListPageButtonSection.tsx";

export function ListPage(): ReactElement {
  const { todos } = useTodoLogic();
  const { completeClick } = useTodoLogic();
  const { deleteClick } = useTodoLogic();
  const { editClick } = useTodoLogic();
  const { saveEditClick } = useTodoLogic();
  const { upwardClick } = useTodoLogic();
  const { downwardClick } = useTodoLogic();
  const { sortByTimeClick } = useTodoLogic();
  const { sortByAuthorClick } = useTodoLogic();

  return (
    <section>
      <ListPageButtonSection onSortByTimeClick={sortByTimeClick} onSortByAuthorClick={sortByAuthorClick} />
      {todos.map((t) => (
        <Todo todo={t} key={crypto.randomUUID()} onCompleteClick={completeClick} onDeleteClick={deleteClick} onEditClick={editClick} saveEditClick={saveEditClick} onUpwardClick={upwardClick} onDownwardClick={downwardClick} />
      ))}
    </section>
  );

}