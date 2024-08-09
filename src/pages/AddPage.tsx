import {ReactElement, useState } from "react";
import {useTodoLogic} from "../hooks/useTodoLogic.ts"
import { ITodo } from "../interfaces.ts";

import "../components/AddTodo.css";


//import { Button, EmployeeAvatar } from "../components";

export function AddPage(): ReactElement {

    const [titleInputValue, setTitle] = useState<string>("");
    const [authorInputValue, setAuthor] = useState<string>("");
    //const [genre, setGenre] = useState<string>("");
    //const [description, setDescription] = useState<string>("");
    const { addTodo } = useTodoLogic();
    //const { todos } = useTodoLogic();

    //console.log(todos);


    //const navigate = useNavigate();


    const onAddClick = () =>{

        const newTodo: ITodo = {
            title:  titleInputValue,
            isComplete: false,
            timestamp: new Date(),
            author: authorInputValue,
            isEditing: false
          };

          //console.log(newTodo);

        addTodo(newTodo);
    }

  return (
    <main className="about-page">
      <div>
            <section className="addTodoMainSection">
                <form action="">
                    <ul className="componentList">
                        <li className="componentListItem">
                            <label className="titleLabel" htmlFor="titleInput">Title</label>
                            <input type="text" id="titleInput" value={titleInputValue} onChange={(e) => setTitle(e.target.value)} /> 
                        </li>
                        <li className="componentListItem">
                            <label htmlFor="authorInput">Author</label>
                              <input type="text" id="authorInput" value={authorInputValue} onChange={(e) => setAuthor(e.target.value)} />
                        </li>
                    </ul>
                     <button type="button" onClick={() => onAddClick()}> Add </button> 
                </form>
            </section>
        </div>
    </main>
  );
}