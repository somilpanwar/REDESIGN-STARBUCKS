import React, { useEffect, useState } from 'react'

const Bestseller = () => {
    const[item,setimte]=useState([]);
    const getitem = async()=>{
        try {

            const data = await fetch('http://localhost:5000/api/product').then(console.log("data recieved!!"))
             setimte(await data.json());

        } catch (error) {
            console.log("something went wrong!!!")
        }
    }
    useEffect(() => {
      getitem()
    },[])
    
    var count=0;
  return (
    <div className='bestseller'>
       {item.map((e,i)=>{
         const range = Math.random()*20;
         if(e.id <= range+1){
           while(count<8){
            count+=1
         return(
            <div className='card' key={i}>

                <h3>{e.name}</h3>
                <h5>{e.price}</h5>
            </div>
         )
        }
        }
       })}
    </div>
  )
}

export default Bestseller
