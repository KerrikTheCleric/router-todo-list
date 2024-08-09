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
    todos: ITodo[];
  }