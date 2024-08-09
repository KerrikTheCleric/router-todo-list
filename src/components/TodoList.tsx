/* import { ReactElement } from "react";
import { ITodo } from "../interfaces";
import Todo from "./Todo";

interface ITodoListProps {
    todos: ITodo[];
    onCompleteClick: (todo: ITodo) => void;
    onDeleteClick: (todo: ITodo) => void;
}

export default function TodoList({ todos, onCompleteClick, onDeleteClick }: ITodoListProps): ReactElement {

    const todosToRender = todos.map((todo) =>

        <Todo todo={todo} onCompleteClick={onCompleteClick} onDeleteClick={onDeleteClick} key={crypto.randomUUID() }/>
    );

    return (
        <section>
            {todosToRender}
        </section>
    )
} */