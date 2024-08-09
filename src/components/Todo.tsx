import { ReactElement } from "react";
import { ITodo } from "../interfaces.ts";
import  EditTodo  from "../components/EditTodo.tsx";

import "./Todo.css";

interface ITodoProps {
    todo: ITodo;
    onCompleteClick: (todo: ITodo) => void;
    onDeleteClick: (todo: ITodo) => void;
    onEditClick: (todo: ITodo) => void;
    saveEditClick: (todoClicked: ITodo, newTitle: string, newAuthor: string) => void;
    onUpwardClick: (todo: ITodo) => void;
    onDownwardClick: (todo: ITodo) => void;

}

export default function Todo({ todo, onCompleteClick, onDeleteClick, onEditClick, saveEditClick, onUpwardClick, onDownwardClick }: ITodoProps): ReactElement {

    const formattedTimeStamp = (todo.timestamp.getFullYear() + '/' + ('0' + (todo.timestamp.getMonth() + 1)).slice(-2) + '/' + ('0' + todo.timestamp.getDay()).slice(-2) + ' - '
        + ('0' + (todo.timestamp.getHours())).slice(-2) + ':' + ('0' + (todo.timestamp.getMinutes())).slice(-2));

    return (
        <div>
            <section className="todoMainSection">
                <b>{todo.title}</b>
                <ul>
                    <li>
                        {formattedTimeStamp}
                    </li>
                    <li>
                        <p>{todo.author}</p>
                    </li>
                </ul>
                <button className="bottomMiddleButtonOne" onClick={() => onUpwardClick(todo)}>
                    <span className="material-symbols-outlined" > arrow_upward </span>
                </button>
                <button className="bottomMiddleButtonTwo" onClick={() => onDownwardClick(todo)}>
                    <span className="material-symbols-outlined" > arrow_downward </span>
                </button>
                <button className="topRightButton" onClick={() => onDeleteClick(todo)}>
                    <span className="material-symbols-outlined" > delete </span>
                </button>
                <button className="middleRightButton" onClick={() => onEditClick(todo)}>
                    <span className="material-symbols-outlined" > edit_square </span>
                </button>
                <button className="lowerRightButton" style={{ background: todo.isComplete ? 'green': 'red' }} onClick={() => onCompleteClick(todo)}>
                    <span className="material-symbols-outlined" > check </span>
                </button>
            </section>
            <section style={{ display: todo.isEditing ? 'inline': 'none' }}>
                <EditTodo todo={todo} onSaveEditClick={saveEditClick}/>
            </section>
        </div>

    )
}