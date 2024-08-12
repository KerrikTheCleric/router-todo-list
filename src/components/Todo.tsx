import { ReactElement } from "react";
import { ITodo } from "../interfaces.ts";
import EditTodo from "../components/EditTodo.tsx";
import { TodoMainSection } from "./TodoMainSection.tsx";

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

    return (
        <div>
            <TodoMainSection todo={todo} onCompleteClick={onCompleteClick} onDeleteClick={onDeleteClick} onEditClick={onEditClick} onUpwardClick={onUpwardClick} onDownwardClick={onDownwardClick} />
            <section style={{ display: todo.isEditing ? 'inline' : 'none' }}>
                <EditTodo todo={todo} onSaveEditClick={saveEditClick} />
            </section>
        </div>
    )
}