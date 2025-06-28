import React, { createContext } from 'react'
 export const userContext= createContext();

const StoreContext = (props) => {
   const count=1;
   const token= localStorage.getItem("token");
    const data= [
        {
            name:'vinay',
            location:'Hyderabad',
            price:100,
            rating:4.6,
        },
        {
            name:'Reddy',
            location:'Mumbai',
            price:200,
            rating:3.6,
        },
        {
            name:'Hello',
            location:'Delhi',
            price:400,
            rating:4.0,
        },
        {
            name:'Helflo',
            location:'Delhi',
            price:500,
            rating:4.4,
        },
        {
            name:'world',
            location:'Chennai',
            price:600,
            rating:4.6,
        },
        {
            random:{
             name:'vinay',
             location:'Hyderabad',
             age:23,
             
            price:900,
            rating:2.6,
             personaldetails:{
                 email:"vinayreddy@gmail.com",
                 phonenumber:"743503240598"
             }
            },
            
            location:'Delhi',
          
        }
    ]

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
