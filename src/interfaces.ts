export interface ITodo {
    title:  string,
    isComplete: boolean
    timestamp: Date
    author: string
    isEditing: boolean
   };

   export interface ITodoContext {
    addTodo: (todo: ITodo) => void;
    completeClick: (todo: ITodo) => void;
    deleteClick: (todo: ITodo) => void;
    editClick: (todo: ITodo) => void;
    saveEditClick: (todoClicked: ITodo, newTitle: string, newAuthor: string) => void;
    upwardClick: (todo: ITodo) => void;
    downwardClick: (todo: ITodo) => void;
    sortByTimeClick: () => void;
    sortByAuthorClick: () => void;
    fetchAPITodos: () => void;
    todos: ITodo[];
  }