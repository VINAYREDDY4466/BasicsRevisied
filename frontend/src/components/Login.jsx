import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const token =localStorage.getItem('token');
  const handleSubmiter = async (e) => {
    e.preventDefault(); 
    try{
    const response=  await axios.post('http://localhost:3000/api/login', {email,  password});
    localStorage.setItem('token', response.data.token);
    if(response.data.success){
        alert("login successfull");
    }
   }
    catch(error){
        console.log(error);
    }
    setEmail('');
    setPassword('');
  };
    useEffect(()=>{
       if(token){
         navigate('/');
       }
     },[token])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login Page</h1>
      <form style={styles.form} onSubmit={handleSubmiter}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid #ccc',
    borderRadius: '20px',
    width: '400px',
    margin: '8rem auto',
    padding: '2rem',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 15px rgba(0, 0, 3, 0.3)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
    fontSize: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #aaa',
    fontSize: '16px',
  },
  button: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;
