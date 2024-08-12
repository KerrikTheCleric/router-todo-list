import { ReactElement, useState } from "react";
import { ITodo } from "../interfaces.ts";
import "./EditTodo.css";

interface IEditTodoProps {
    todo: ITodo;
    onSaveEditClick: (todoClicked: ITodo, newTitle: string, newAuthor: string) => void;
}

export default function EditTodo({ todo, onSaveEditClick }: IEditTodoProps): ReactElement {

    const [titleInputValue, setTitle] = useState<string>(todo.title);
    const [authorInputValue, setAuthor] = useState<string>(todo.author);

    return (
        <section className="editTodoMainSection">
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
                <button type="button" onClick={() => onSaveEditClick(todo, titleInputValue, authorInputValue)}> Save </button>
            </form>
        </section>
    )
}