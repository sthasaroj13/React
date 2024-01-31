import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [shoppingList, setshoppingList] = useState([]);
  const handleForm = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    // console.log(formObj);
    if (formObj.name==='') {
      alert('fill the box')
      return;
     }
    formObj.purchased = false;
    // console.log(pur);
    setshoppingList([...shoppingList, formObj]);
    e.target.querySelector(".name").value = ""
   
  };
  
  const removeItems = (e) => {
    e.preventDefault();
    let remove = e.target.value;
    console.log(remove);
    
    let newlist = shoppingList.filter((item) => {
      if (remove === item.name) {
        return false;
      } else {
        return true;
      }
    });
    setshoppingList(newlist);
  };
  const markDone =(e)=>{
    let done = e.target.value
    // console.log(done);
    shoppingList.map((val)=>{

      if (done===val.name) {
        val.purchased=true;
        
      }
    })
    setshoppingList([...shoppingList])
  }

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Shopping List Manager
      </h1>
      <form
        action=""
        onSubmit={handleForm}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <input type="text" name="name" className="name" />
          <button
            type="submit"
            style={{
              marginLeft: "10px",
              backgroundColor: "purple",
              color: "white",
              padding: "2px",
            }}
          >
            Add
          </button>
        </div>
      </form>
      {
       shoppingList.map((val, index) => {
        return (
          <div
            key={index}
            className={val.purchased?'div card  card:hover  card-content  flex-apart btn':'div card  card:hover  card-content  flex-apart b'}
            
            
            
            >
          
          
            

            <span className={val.purchased?'btn':'b'}>{val.name} /{val.purchased ?'yes':'no'}</span>
            <span><button onClick={markDone} value={val.name}>done</button></span>
           <span><button onClick={removeItems} value={val.name}>
              x
            </button></span> 
          </div>
          
        );
      })}
    </>
  );
}

export default App;
