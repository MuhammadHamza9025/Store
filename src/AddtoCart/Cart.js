import React from 'react'
import cart from '../cart.css'

export default function Cart({cart,amount,add,sub}) {
  return (
   <>
   {
    cart.map((val)=>{
        return(
            <div className="cartcontainer">
            <div className="cartimage"><img src={val.url} alt="" /></div>
            <div className="carttitle">{val.name} | {val.category}</div>
            <div className="cartrange">
                <div className="add" onClick={add}>+</div>
                <span>{amount}</span>
                <div className="subtr" onClick={sub}>-</div>
            </div>

            <div className="cartpara">{val.seller}</div>
            <div className="cartprice">{`${val.price*amount}$`}</div>
            {/* <div className="button"><button onClick={()=>addtocart(val)}>Click me</button></div */}
        </div>
        )
    })
   }
   <h1>
   {cart.map((val)=>{

    <span>h</span>
   
   })}
   </h1>
   </>
  )
}
