import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso', completed: false},
  {text: 'Bla bla bla ', completed: true},
  {text: 'Otra tarea', completed: false}
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos= todos.filter(todo => !!todo.completed).length;
  const totalTodos=todos.length;

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Se busca: '+searchValue);

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())

  })
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text == text);
    newTodos[index].completed =!newTodos[index].completed ;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text == text);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onCompleted={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>

    </React.Fragment>
  );
}


export default App;
