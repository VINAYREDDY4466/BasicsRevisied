import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoInput = () => {
  const[text, setText]=useState('');
  const dispatch =useDispatch();

  const hanleAdd= ()=>{
      if(text.trim()){
        dispatch(addTodo(text));
        setText('');
      }
  };

  return (
    <div className='mb-5'>
        <input type="text"
         value={text}
         onChange={(e)=>setText(e.target.value)}
         placeholder='Add Task'
        
        />
        <button onClick={hanleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
