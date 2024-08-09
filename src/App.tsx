import { ReactElement, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { ITodo } from "./interfaces";
import {InfoPage} from "./pages/InfoPage";
import { ListPage } from "./pages/ListPage.tsx";
import { Outlet } from "react-router-dom";
import { TodoProvider } from "./context/TodoProvider.tsx";
import { Header } from "./components/Header.tsx";



export function App(): ReactElement {

  /*const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };*/

  /* const completeClick = (todoClicked: ITodo): void => {
    
    setTodos(todos.map(todo => {
      if (todo === todoClicked) {
        return { ...todo, isComplete: !todo.isComplete }; 
      }else{
        return todo; 
      }
    })); 

  }; */

  /* const deleteClick = (todo: ITodo): void => {
    setTodos(todos.filter((t) => t !== todo));
  }; */

  return (
    <>
      {/* <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} onCompleteClick={completeClick} onDeleteClick={deleteClick}/> */}
      {/* <InfoPage/>
      <ListPage/> */}
      <Header/>
      <TodoProvider>
        <Outlet/>
      </TodoProvider>
    </>
  );
}
