import './TodoItem.css'

function TodoItem({text, completed}) {
    return(
      <li className="TodoItem">
        <button 
        className= {`checkCircle ${completed && "checkCircleActive"}`}>
          
        </button>
        <p 
        className={`TodoItem-p ${completed && "TodoItem-p-active"}`}
        >{text}</p>
        <button className='deleteTask'> </button>
      </li>
    );
  }
export {TodoItem};