import { ReactElement } from "react";
import { ITodo } from "../interfaces";
import Todo from "./Todo";

interface ITodoListProps {
    todos: ITodo[];
    //onMovieClick: (movie: IMovieCardData) => void;
}

export default function TodoList({ todos }: ITodoListProps): ReactElement {

    const todosToRender = todos.map((todo) =>
        <Todo todo={todo} key={crypto.randomUUID()}/>
    );

    return (
        <section>
            {todosToRender}
        </section>
    )
}