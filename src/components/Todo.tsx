import { ReactElement } from "react";
import { ITodo } from "../interfaces.ts";
import "./Todo.css";

interface ITodoProps {
    todo: ITodo;
    //onClick: (todo: ITodo) => void;
  }

export default function Todo({ todo }: ITodoProps): ReactElement {

    return (
        <section className="todoMainSection">
            <p>{todo.title}</p>
        </section>
    )
}