import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
import React from 'react';

function TodoCounter() {
    const {
        totalTodos, 
        completedTodos, 

    }= React.useContext(TodoContext);
    return (
        totalTodos === completedTodos ? 
        <h1 className='TodoCounter'>Completaste todas tus tareas!!</h1>
        : 

        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas.
        </h1>
    );
}

export {TodoCounter};