import { ReactElement, useState } from "react";
import { ITodo } from "../interfaces.ts";
import "./Todo.css";

interface ITodoProps {
    todo: ITodo;
    onCompleteClick: (todo: ITodo) => void;
  }

export default function Todo({ todo, onCompleteClick}: ITodoProps): ReactElement {

    let buttonColour = "red";

    if(todo.isComplete){
        buttonColour = "green";
    }

    return (
        <section className="todoMainSection">
            <p>{todo.title}</p>
            <b>{todo.title}</b>
            <button className="lowerRightButton" style={{background: buttonColour}} onClick={() => onCompleteClick(todo)}>
                <span className="material-symbols-outlined" > check </span>
            </button>
        </section>
    )
}