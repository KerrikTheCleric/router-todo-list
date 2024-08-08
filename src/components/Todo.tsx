import { ReactElement } from "react";
import { ITodo } from "../interfaces.ts";
import "./Todo.css";

interface ITodoProps {
    todo: ITodo;
    onCompleteClick: (todo: ITodo) => void;
    onDeleteClick: (todo: ITodo) => void;
  }

export default function Todo({ todo, onCompleteClick, onDeleteClick}: ITodoProps): ReactElement {

    let buttonColour = "red";

    if(todo.isComplete){
        buttonColour = "green";
    }

    return (
        <section className="todoMainSection">
            <b>{todo.title}</b>
            <ul>
                <li>
                    <p>{todo.timestamp.getFullYear()}-{todo.timestamp.getMonth()}-{todo.timestamp.getDay()}  {todo.timestamp.getHours()}:{todo.timestamp.getMinutes()}</p>
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