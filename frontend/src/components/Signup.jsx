import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const handle= async(e)=>{
        e.preventDefault();
        try {
            const repsonse= await axios.post('http://localhost:3000/api/register', {name, email, password},{
                Headers:{
                    "content-type":"application/json"
                }
            })
            if(repsonse.data.success){
                alert("registered successfully");
            }
             
        } catch (error) {
            alert("registration failed", error.message);
        }
       console.log(name, email, password);
             setEmail('');
             setName('');
             setPassword('');
    }
  return (
    <div>
        <div>Sign up page</div>
        <form onSubmit={handle}>
              <input type="name" placeholder='Enter your name'
               value={name} 
               onChange={(e)=>setName(e.target.value)}
                />
              <input type="email"
              placeholder='Enter your email'
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />
              <input type="password"
              placeholder='Enter your password'
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              required
              />
              <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signup
