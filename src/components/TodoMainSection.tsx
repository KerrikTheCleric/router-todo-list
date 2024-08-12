import { ReactElement } from "react";
import { ITodo } from "../interfaces.ts";
import "./TodoMainSection.css";

interface ITodoMainSectionProps {
    todo: ITodo;
    onCompleteClick: (todo: ITodo) => void;
    onDeleteClick: (todo: ITodo) => void;
    onEditClick: (todo: ITodo) => void;
    onUpwardClick: (todo: ITodo) => void;
    onDownwardClick: (todo: ITodo) => void;
}

export function TodoMainSection({ todo, onCompleteClick, onDeleteClick, onEditClick, onUpwardClick, onDownwardClick }: ITodoMainSectionProps): ReactElement {

    const formattedTimeStamp = (todo.timestamp.getFullYear() + '/' + ('0' + (todo.timestamp.getMonth() + 1)).slice(-2) + '/' + ('0' + todo.timestamp.getDay()).slice(-2) + ' - '
        + ('0' + (todo.timestamp.getHours())).slice(-2) + ':' + ('0' + (todo.timestamp.getMinutes())).slice(-2));

    return (
        <section className="todoMainSection">
            <ul className="dataList">
                <li>
                    <b className="titleText">{todo.title}</b>
                </li>
                <li>
                    <p>{formattedTimeStamp}</p>
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
            <button className="lowerRightButton" style={{ background: todo.isComplete ? 'green' : 'red' }} onClick={() => onCompleteClick(todo)}>
                <span className="material-symbols-outlined" > check </span>
            </button>
        </section>
    );
}