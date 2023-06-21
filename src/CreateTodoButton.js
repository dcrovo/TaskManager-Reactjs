import './CreateTodoButton.css'
function CreateTodoButton() {
    return(
        <button 
        className="createTodoButton"
        onClick={() => console.log('click')}
        >+</button>
    );
}

export {CreateTodoButton};