import { ReactElement, useState } from "react";
import "./AddTodo.css";
import { ITodo } from "../interfaces";
import TodoList from "./TodoList";

interface IAddTodoProps {
    addTodo: (todo: ITodo) => void;
  }

export default function AddTodo({ addTodo }: IAddTodoProps): ReactElement {

    const [titleInputValue, setTitleInputValue] = useState('');
    //const [ratingInputValue, setRatingInputValue] = useState('3');
    //const [genreInputValue, setGenreInputValue] = useState('Action');
    //const [descriptionInputValue, setDescriptionInputValue] = useState('');
    //const [movieCards, setMovieCards] = useState<IMovieCardData[]>([]);


    const handleTitleInputChange = (event: any) => {
        setTitleInputValue(event.target.value);
    };

    /*const handleRatingInputChange = (event: any) => {
        setRatingInputValue(event.target.value);
    };

    const handleGenreInputChange = (event: any) => {
        setGenreInputValue(event.target.value);
    };

    const handleDescriptionInputChange = (event: any) => {
        setDescriptionInputValue(event.target.value);
    };*/

    function addButtonEvent() {

         const newTodod: ITodo = {
            title:  titleInputValue,
           };

           addTodo(newTodod); 
    }
    

    function todoClickEvent(todo: ITodo){
        //setMovieCards(movieCards.filter((m) => m !== movie));
    }
      
    return (
        <div>
            <section className="addMovieMainSection roundedComponent">
                <form action="">
                    <ul className="addMovieComponentList">
                        <li className="addMovieComponentListItem">
                            <label htmlFor="titleInput">Title</label>
                            <input className="roundedComponent" type="text" name="" id="titleInput" value={titleInputValue} onChange={handleTitleInputChange} />
                        </li>
                    </ul>
                    <button className="roundedComponent" type="button" onClick={() => addButtonEvent()}> Add </button>
                </form>
            </section>
        </div>
    )
}