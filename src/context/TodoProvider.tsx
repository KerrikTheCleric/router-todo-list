import { createContext, ReactElement, ReactNode, useState } from "react";
import { ITodo, ITodoContext } from "../interfaces";

interface ITodoProviderProps {
  children: ReactNode;
}

/**
 * The MovieContext is the react specific tool that provides the functionality the share the data
 * across the application. But it needs a provider that handles the data.
 */

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

/**
 * The MovieProvider acts like a central hub for the data that is shared across the application.
 * The MovieProvider owns and controls the data. Other components in the application can "subscribe"
 * to this data by using a hook called "useContext".
 */
export function TodoProvider({ children }: ITodoProviderProps): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodos([todo, ...todos]);
    //console.log(todos);
  };

  const removeTodo = (todo: ITodo): void => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const completeClick = (todoClicked: ITodo): void => {
    
    setTodos(todos.map(todo => {
      if (todo === todoClicked) {
        return { ...todo, isComplete: !todo.isComplete }; 
      }else{
        return todo; 
      }
    })); 

  };

  const deleteClick = (todo: ITodo): void => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const values: ITodoContext = {
    addTodo,
    removeTodo,
    completeClick,
    deleteClick,
    todos
  };

  /**
   * This JSX element is something the the MovieContext provides, and it will act like a "parent element"
   * the the entire application och specific parts of the application. It allows the data to be shared with
   * the children components. MovieContext is just an object, we can't return that, that's why we have the
   * ".Provider" attribute that is a Component that we can return.
   */
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}