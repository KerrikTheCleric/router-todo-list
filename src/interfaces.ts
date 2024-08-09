export interface ITodo {
    title:  string,
    isComplete: boolean
    timestamp: Date
    author: string
   };

   export interface ITodoContext {
    addTodo: (todo: ITodo) => void;
    removeTodo: (todo: ITodo) => void;
    completeClick: (todo: ITodo) => void;
    deleteClick: (todo: ITodo) => void;
    todos: ITodo[];
  }