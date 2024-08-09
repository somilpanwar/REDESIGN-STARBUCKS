import React, { useEffect, useState } from 'react'
import'../style/allcss.css'

const Product = () => {
    const[item , setitem]= useState([]);
    const getproduct = async()=>{
          try {
            const data = await fetch('http://localhost:5000/api/product').then(console.log("data recieved!!"))
            var result =[]
            result = await data.json();
             setitem( result);
          } catch (error) {
            console.log("fetching error!!")
          }
             
             
             

    }


   
  return (
    <>
    <button onClick={getproduct}>Get Item </button>
    {item.map((e,i)=>{
        const range = Math.random()*20;
        if(e.id <= range){
         return (
            <div key={i}>
                <ul>
                <li className='imgs'>
                  
                  <img src={`${e.image_url}`}/>
                  
                </li>
                    <li>
                        {e.id}
                    </li>
                    <li>
                        {e.name}
                    </li>
                </ul>

            </div>
         )
        }
       
    })}

      
    </>
  )
}

export default Product
