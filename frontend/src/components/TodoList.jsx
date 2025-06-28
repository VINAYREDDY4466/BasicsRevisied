import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/todoSlice';

const TodoList = () => {
    const todos = useSelector((state)=>state.todos);
    const disptach= useDispatch();
  return (
    <ul>
        {todos.map((todo)=>(
           <li key={todo.id} className='mb-5'>
              <span onClick={()=>disptach(toggleTodo(todo.id))}
                  className=' space-y-6 p-5 cursor:pointer'   
                >
                 {todo.text}
              </span>
              <button onClick={()=>disptach(deleteTodo(todo.id))}>Delete</button>
           </li>
        ))}
    </ul>
  )
}

export default TodoList
