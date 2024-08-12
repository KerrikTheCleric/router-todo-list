import { createContext, ReactElement, ReactNode, useState } from "react";
import { ITodo, ITodoContext } from "../interfaces";

interface ITodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export function TodoProvider({ children }: ITodoProviderProps): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>([]);

  /**
   * Adds a new Todo item to the array.
   * @param todo A new ITodo data object to add.
   */
  const addTodo = (todo: ITodo) => {
    setTodos([todo, ...todos]);
  };

  /**
   * Marks Todo as complete or incomplete by changing the colour of the button.
   * @param todoClicked The clicked Todo.
   */

  const completeClick = (todoClicked: ITodo): void => {

    setTodos(todos.map(todo => {
      if (todo === todoClicked) {
        return { ...todo, isComplete: !todo.isComplete };
      } else {
        return todo;
      }
    }));

  };

  /**
   * Deletes a Todo from the array.
   * @param todo The clicked Todo to delete.
   */

  const deleteClick = (todo: ITodo): void => {
    setTodos(todos.filter((t) => t !== todo));
  };

  /**
   * Marks as clicked Todo as editing so the edit section can be displayed or hidden.
   * @param todoClicked The clicked Todo.
   */

  const editClick = (todoClicked: ITodo): void => {

    setTodos(todos.map(todo => {
      if (todo === todoClicked) {
        return { ...todo, isEditing: !todo.isEditing };
      } else {
        return todo;
      }
    }));
  };

  /**
   * 
   * @param todoClicked Changes the relevant Todo using data from the edit section.
   * @param newTitle The new title.
   * @param newAuthor the new author.
   */

  const saveEditClick = (todoClicked: ITodo, newTitle: string, newAuthor: string): void => {
    setTodos(todos.map(todo => {
      if (todo === todoClicked) {
        return { ...todo, isEditing: !todo.isEditing, title: newTitle, author: newAuthor };
      } else {
        return todo;
      }
    }));
  };

  /**
   * Shifts the clicked Todo up one slot in the array unless it is already first or alone in the array.
   * @param todoClicked The clicked Todo.
   */

  const upwardClick = (todoClicked: ITodo): void => {
    if (todoClicked !== todos[0] && todos.length >= 2) {
      for (let i = 0; i < todos.length; i++) {
        if (todoClicked === todos[i]) {
          setTodos(array => {
            let data = [...array];
            let temp = data[i];
            data[i] = data[i - 1];
            data[i - 1] = temp;
            return data;
          })
        }
      }
    }
  }

  /**
   * Shifts the clicked Todo down one slot in the array unless it is already last or alone in the array.
   * @param todoClicked The clicked Todo.
   */

  const downwardClick = (todoClicked: ITodo) => {
    if (todoClicked !== todos[todos.length - 1] && todos.length >= 2) {
      for (let i = 0; i < todos.length; i++) {
        if (todoClicked === todos[i]) {
          setTodos(array => {
            let data = [...array];
            let temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
            return data;
          })
        }
      }
    }
  }

  /**
   * Sorts the array by time.
   */

  const sortByTimeClick = () => {
    // Change to non-mutating solution?
    const sorted = [...todos].sort((a, b) => {
      return a.timestamp.getTime() - b.timestamp.getTime();
    });
    setTodos(sorted);
  };

  /**
   * sorts the array by author.
   */

  const sortByAuthorClick = () => {
    // Change to non-mutating solution?
    const sorted = [...todos].sort((a, b) => {
      if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
      if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
      return 0;
    });
    setTodos(sorted);
  };

  const values: ITodoContext = {
    addTodo,
    completeClick,
    deleteClick,
    editClick,
    saveEditClick,
    upwardClick,
    downwardClick,
    sortByTimeClick,
    sortByAuthorClick,
    todos
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}