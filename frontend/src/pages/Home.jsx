import React, { useState } from 'react';

const Home = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDelete = (id) => {
    let temp = [...todos];  // copy to avoid direct mutation
    temp.splice(id, 1);
    setTodos(temp);
  };
  const handleCompleted= (id)=>{
     let temp=[...todos];
     temp[id].completed=true;
     setTodos(temp);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          placeholder="Enter your task"
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      {todos.map((todo, id) => (
        <div key={id} style={{ marginTop: '10px' }}>
          <p>{todo.text}</p>
          <p>{todo.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={()=>handleCompleted(id)}>Completed</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
