import React from 'react'

export default function Practice({getapi,addcart}) {
    
  return (
    <>
    <h1>HHHHH</h1>
    {getapi.map((data)=>{
return (
<section>

<hr />
<div onClick={addcart}>{data.id}</div>


</section>

)
    })}
    </>
  )
}
