import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App =() =>{
  const[inputList,setInputList] =useState("");
  const[Items,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listofItems=()=>{
    setItems((olditems)=> {
      return [...olditems,inputList];
    });
    setInputList("");
  };
  const deleteitems=(id)=>{
    console.log("deleted");

    setItems((oldtimes)=> {
      return oldtimes.filter((arrElem,index)=>{
        return index!==id;
      });
    });
  };

  return (
    <>
    <div className="main_div">
      <div className="centre_div">
        <br />
        <h1> To-Do-List</h1>
        <br/>
        <input type="text" placeholder="Add Items"
          value={inputList}
        onChange={itemEvent}/>
        <button onClick={listofItems}> + </button>

        <ol>
          {/*<li> {inputList}</li>*/}
          {Items.map((itemval,index)=>{
            return <ToDoList
            key={index}
            id={index}
            text={itemval}
            onselect={deleteitems}
            />;
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
