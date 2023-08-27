import React, { useState } from 'react'
import Products from './Products';

export default function Productlist({product,addtocart}) {
  const [items , setitems]=useState(product);
  const filteritem=((category)=>{
    const updatelist=product.filter((current)=>{
    return current.category===category;
    });
    setitems(updatelist)
  });
  return (

<>
<div className="btn">
  <button onClick={()=>filteritem('Watches')}>Watch</button>
  <button  onClick={()=>filteritem('CCTV')}>CUP</button>
  <button  onClick={()=>filteritem('Laptops')}>CCtv</button>
  <button  onClick={()=>setitems(product)}>CCtv</button>
</div>
<section>

{items.map((val)=>{
    return(
<div className="container">
            <div className="image"><img src={val.url} alt="" /></div>
            <div className="title">{val.name} | {val.category}</div>
            <div className="para">{val.seller}</div>
            <div className="price">{`${val.price}$`}</div>
            <div className="button"><button onClick={()=>addtocart(val)}>Click me</button></div>
        </div>
    )
})

}
</section>
</>
  )
}
