import { ReactElement, useState } from "react";
import { useTodoLogic } from "../hooks/useTodoLogic.ts";
import { ITodo } from "../interfaces.ts";
import "./AddPageSection.css";

export function AddPageSection(): ReactElement {

  const [titleInputValue, setTitle] = useState<string>("");
  const [authorInputValue, setAuthor] = useState<string>("");
  const { addTodo } = useTodoLogic();

  const onAddClick = () => {

    const newTodo: ITodo = {
      title: titleInputValue,
      isComplete: false,
      timestamp: new Date(),
      author: authorInputValue,
      isEditing: false
    };

    addTodo(newTodo);
    setTitle("");
    setAuthor("");
  }

  return (
    <section className="addTodoMainSection">
      <form action="">
        <ul className="componentList">
          <li className="componentListItem">
            <label className="titleLabel" htmlFor="titleInput">Title</label>
            <input type="text" id="titleInput" value={titleInputValue} onChange={(e) => setTitle(e.target.value)} />
          </li>
          <li className="componentListItem">
            <label htmlFor="authorInput">Author</label>
            <input type="text" id="authorInput" value={authorInputValue} onChange={(e) => setAuthor(e.target.value)} />
          </li>
        </ul>
        <button type="button" onClick={() => onAddClick()}> Add </button>
      </form>
    </section>
  );
}