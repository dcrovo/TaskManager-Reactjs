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
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>

    </React.Fragment>
  );
}


export default App;
