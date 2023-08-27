import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Products from './AddtoCart/Products';
import Productlist from './AddtoCart/Productlist';
import Cart from './AddtoCart/Cart';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'




function App() {
const [product,setproduct]=useState(Products);
const [cart,setcart]=useState([]);
const [amount,setamount]=useState(1);
const add=()=>{
  setamount(amount+1);
}
const sub=()=>{
  setamount(amount-1);
}

console.log(cart)
const addtocart=(data)=>{
  setcart([...cart,data ])
  console.log(data)
}







return (
    <>
    <BrowserRouter>
    
<Link to="/Home">Home</Link>
    <Link to="/Cart">Cart</Link>
    <sup>{cart.length}</sup>
<Routes>
<Route exact path='/Home' element={ <Productlist product={product} addtocart={addtocart}></Productlist>}></Route>
<Route exact path='/' element={ <Productlist product={product} addtocart={addtocart}></Productlist>}></Route>
<Route exact path='/Cart' element={ <Cart cart={cart} add={add} sub={sub} amount={amount}/>}></Route>

    </Routes>
    
    </BrowserRouter>
    {/* <Fetchapi></Fetchapi> */}
{/* <Practice getapi={getapi} addcart={addcart}></Practice>
<Pracar  prcart={prcart}></Pracar> */}

   
<Cart cart={cart} add={add} sub={sub} amount={amount}/>
    </>
  );
}

export default App;
