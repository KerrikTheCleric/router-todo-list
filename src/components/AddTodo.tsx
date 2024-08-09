/* import { ReactElement, useState } from "react";
import "./AddTodo.css";
import { ITodo } from "../interfaces";

interface IAddTodoProps {
    addTodo: (todo: ITodo) => void;
  }

export default function AddTodo({ addTodo }: IAddTodoProps): ReactElement {

    const [titleInputValue, setTitleInputValue] = useState('');
    const [authorInputValue, setAuthorInputValue] = useState('');
    //const [genreInputValue, setGenreInputValue] = useState('Action');
    //const [descriptionInputValue, setDescriptionInputValue] = useState('');
    //const [movieCards, setMovieCards] = useState<IMovieCardData[]>([]);


    const handleTitleInputChange = (event: any) => {
        setTitleInputValue(event.target.value);
    };

    const handleAuthorInputChange = (event: any) => {
        setAuthorInputValue(event.target.value);
    };

    /*const handleGenreInputChange = (event: any) => {
        setGenreInputValue(event.target.value);
    };

    const handleDescriptionInputChange = (event: any) => {
        setDescriptionInputValue(event.target.value);
    };*/

    /* function addButtonEvent() {

         const newTodo: ITodo = {
            title:  titleInputValue,
            isComplete: false,
            timestamp: new Date(),
            author: authorInputValue
           };

           addTodo(newTodo); 
    } */
    

    /* function todoClickEvent(todo: ITodo){
        //setMovieCards(movieCards.filter((m) => m !== movie));
    }
      
    return (
        <div>
            <section className="addTodoMainSection">
                <form action="">
                    <ul className="componentList">
                        <li className="componentListItem">
                            <label className="titleLabel" htmlFor="titleInput">Title</label>
                            <input type="text" id="titleInput" value={titleInputValue} onChange={handleTitleInputChange} />
                        </li>
                        <li className="componentListItem">
                            <label htmlFor="authorInput">Author</label>
                            <input type="text" id="authorInput" value={authorInputValue} onChange={handleAuthorInputChange} />
                        </li>
                    </ul>
                    <button type="button" onClick={() => addButtonEvent()}> Add </button>
                </form>
            </section>
        </div>
    )
}  */