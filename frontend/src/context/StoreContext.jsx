import axios from 'axios';
import React, { createContext, useState } from 'react'
 export const userContext= createContext();

const StoreContext = (props) => {
   const count=1;
   const token= localStorage.getItem("token");
    const[data, setData]= useState([]);
    const getData= async()=>{
     const response= await axios.get('http://localhost:3000/api/getProducts')
     setData(response.data);
    }
    getData();
   const value={
    count,
    data,
    token,
   }
  return (
   <userContext.Provider value={value}>
      {props.children}
      
   </userContext.Provider>
  )
}

export default StoreContext;
