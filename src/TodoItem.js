import './TodoItem.css'

function TodoItem({text, completed, onCompleted, onDelete}) {
    return(
      <li className="TodoItem">
        <button 
        className= {`checkCircle ${completed && "checkCircleActive"}`}
        onClick={onCompleted}>
          
        </button>
        <p 
        className={`TodoItem-p ${completed && "TodoItem-p-active"}`}
        >{text}</p>
        <button 
        className='deleteTask'
        onClick={onDelete}> </button>
      </li>
    );
  }
export {TodoItem}