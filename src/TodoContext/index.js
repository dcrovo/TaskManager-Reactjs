import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();

function TodoProvider({children}) { 
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error} = useLocalStorage('TODOS_V1', []);
    
      const completedTodos= todos.filter(todo => !!todo.completed).length;
      const totalTodos=todos.length;
    
      const [searchValue, setSearchValue] = React.useState('');
      
      const [openModal, setOpenModal] = React.useState(false);
      const searchedTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    
      })
      
      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
          text, 
          completed: false,
        }); 
        saveTodos(newTodos);
      };
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(
          (todo) => todo.text === text);
        newTodos[index].completed =!newTodos[index].completed ;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(
          (todo) => todo.text === text);
        newTodos.splice(index, 1);
        saveTodos(newTodos);
      };
    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchedTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo, 
            loading, 
            error,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};