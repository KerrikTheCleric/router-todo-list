import { ReactElement } from "react";
import { ITodo } from "../interfaces.ts";
import "./Todo.css";

interface ITodoProps {
    todo: ITodo;
    onCompleteClick: (todo: ITodo) => void;
    onDeleteClick: (todo: ITodo) => void;
}

export default function Todo({ todo, onCompleteClick, onDeleteClick }: ITodoProps): ReactElement {

    let buttonColour = "red";

    if (todo.isComplete) {
        buttonColour = "green";
    }

    let formattedTimeStamp = (todo.timestamp.getFullYear() + '/' + ('0' + (todo.timestamp.getMonth() + 1)).slice(-2) + '/' + ('0' + todo.timestamp.getDay()).slice(-2) + ' - '
        + ('0' + (todo.timestamp.getHours())).slice(-2) + ':' + ('0' + (todo.timestamp.getMinutes())).slice(-2));


    return (
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
            <button className="lowerRightButton" style={{ background: buttonColour }} onClick={() => onCompleteClick(todo)}>
                <span className="material-symbols-outlined" > check </span>
            </button>
            <button className="topRightButton" onClick={() => onDeleteClick(todo)}>
                <span className="material-symbols-outlined" > delete </span>
            </button>
        </section>
    )
}