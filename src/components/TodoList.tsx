import { ReactElement } from "react";
import { ITodo } from "../interfaces";
import Todo from "./Todo";

interface ITodoListProps {
    todos: ITodo[];
    onCompleteClick: (todo: ITodo) => void;
}

export default function TodoList({ todos, onCompleteClick }: ITodoListProps): ReactElement {

    const todosToRender = todos.map((todo) =>

        <Todo todo={todo} onCompleteClick={onCompleteClick} key={crypto.randomUUID() }/>
    );

    return (
        <section>
            {todosToRender}
        </section>
    )
}