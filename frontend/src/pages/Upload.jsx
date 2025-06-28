import axios from 'axios';
import React, { useState } from 'react'

const Upload = () => {
  const[name, setname]=useState('');
  const[location, setlocation]=useState('');
  const[price, setPrice]= useState(0);
  const[rating, setrating]=useState(0);
  const formData = new FormData();
  const handleSubmit =async(e)=>{
     e.preventDefault();
     formData.append("name", name);
     formData.append("location", location);
     formData.append("price", price);
     formData.append("rating", rating)
      
        alert("data uploaded successfully")
        setPrice(0);
        setlocation("");
        setname("");
        setrating("");
       
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter your name ' required value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="text"  placeholder='enter your location' required value={location} onChange={(e)=>setlocation(e.target.value)}/>
        <input type="text"  placeholder='enter your price' required value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" placeholder='enter your rating ' required  value={rating} onChange={(e)=>setrating(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Upload
