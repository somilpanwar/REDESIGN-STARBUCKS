import React, { useEffect, useState } from 'react'

const Bestseller = () => {
    const[item,setimte]=useState([]);
    const[loading,setloading]=useState(false);
    const getitem = async()=>{
        try {
            setloading(true);
            const data = await fetch('http://localhost:5000/api/product').then(console.log("data recieved!!"))
             setimte(await data.json());
             setloading(false);

        } catch (error) {
            setloading(false);
            console.log("something went wrong!!!")
        }
    }
    useEffect(() => {
      getitem()
    },[])
    
    var count=0;
  return (
    <div className='arrangeitems'>
        {loading===true && <p>loading...</p>}
       {item.map((e,i)=>{
         const range = Math.random()*20;
         if(e.category==="Merchandise"){
           while(count<8){
            count+=1
         return(
            <div className='card' key={i}>

                <h3>{e.name}</h3>
                <h4>{e.category}</h4>
                <h5>${e.price}</h5>
                <button>Add Item</button>
            </div>
         )
        }
        }
       })}
    </div>
  )
}

export default Bestseller
