import { useState } from 'react'

import './App.css'

function App() {
  // const [error,setError] = useState('')
   const[result ,setResult]=useState('')
  const hanldeSubmit =(e)=>{
e.preventDefault()
// console.log(e.target);
let form = e.target;
let formData = new FormData(form)
console.log(formData);
 let fromObj = Object.fromEntries(formData.entries())
//  let Jsonconv = JSON.stringify(fromObj)
 console.log(fromObj)
//  console.log(Jsonconv)
  if (fromObj.name ==='') {
    
    alert('there is error')
    
    
  }
  else{
    setResult(result)
  }
  }
  
  

  return (
    <>
      <h1>Form</h1>
      <form action="" className='' onSubmit={hanldeSubmit}>
<div>
  <label htmlFor="">name</label>
  <input type="text"  value={result} onChange={(e)=>setResult(e.target.value)}
  name='name'/>
</div> <br />
<div>
  <label htmlFor=""> email</label>
  <input type="email" value={result} onChange={(e)=>setResult(e.target.value)}
  name='email' />
</div> <br />
<div>
  <label htmlFor="">Gender</label>
  <select name="select" id="">
  <option value="">Select</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  </select> <br />
  <br />

  <div>
    <label htmlFor="">Country</label>
    <input type="radio" name='country'/> Nepal
    <input type="radio" name='country' /> India
    <input type="radio" name='country' /> China
  </div>
</div>
<div>
  <button type='submit'>submit</button>
</div>



      </form>
      <p>Name :{result}</p>
      <p>Email :{result}</p>
    </>
  )
}

export default App
