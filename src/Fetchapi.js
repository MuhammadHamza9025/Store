import React from 'react'
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';


export default function Fetchapi() {
    const style={
        backgroundColor:'black',
        color:'white',
        maxWidth:'500px',
        
      }
      const [search,setsearch]=useState('');
    
    const [post,setpost]=useState([]); 
    const fetchpost=async ()=>{
        const response =await fetch ('https://jsonplaceholder.typicode.com/photos');
       setpost( await response.json());

                        // OR 
                        
    //   fetch ('https://jsonplaceholder.typicode.com/photos')
    //   .then(response=>response.json())
    //   .then((json=>setpost(json)));
    
    }
    useEffect(()=>{
    fetchpost()
    },[])  
    
  return (
    <>

    <input type="text " onChange={(e)=>{
      setsearch(e.target.value)
    }} />
{
  post.filter((item)=>{
    if(search===''){
      return item;
    }
    else if(item.title.toString().includes(search.toLowerCase())){
      return item;
    }
  })
  
  .map((item)=>{
    return(
<>
<div style={style}>{item.userId}</div>
<div style={style}>{item.id}</div>
<div style={style}>{item.title}</div>
<div style={style}>{item.url}</div>

</>
    )
  })
}
    </>
  )
}
