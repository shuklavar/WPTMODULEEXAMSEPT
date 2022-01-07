import axios from "axios";
import { useState } from "react";
export default function App() {
  return (
    <div className="container-fluid">
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const headerApp = "My Chat App";
  const studentName = "Varunakar Shukla";
  const studentID = "210940520113";
  const inputcss= "form-control w-100 p-3 rounded-pill";
  const  inputcssError= "form-control w-100 p-3 rounded-pill border-danger";
  const [inputChat, setInputChat] = userState("");
  const [validationError, setValidationERROR]=useState(false);
  const [list, setlist]=useState([]);
  const handleInput= (e)=>{
  const newValue = e.target.value;
  setInputChat(newValue);
};
const sendMessage=()=>
{
if(inputChat=="")
{
  setValidationERROR(true);
  alert("Empty field Not allowed");
  return

};
const newList=[...list, inputChat];
setList(newList);
setInputChat("");
setValidationError(false);
};
return
(
  <div>
  <div className="row bg-secondary p-3">
    <div className="col fs-1">{headerApp} </div>
    <div className="col fs-4 text-light" >
      {studentName}
      {studentID}
    </div>
  </div>
  <div className="row mt-2">
    <div className="col-10 p-1">
      <input
        type="text"
        name=""
        id=""
        placeholder="lets chat here----"
        className= {inputChat== && validationError ? inputcssError/>
    </div>

    <div className="col-2 p-1">
      <input type="button" value="send" className="form-control p-3 btn-outline-primary border round "onclick={sendMessage} /
      >
    </div>
    </div>
    <div id="pid">
     {list.map({item)=> 
     {<div className="alert alert-warning">{item}</div>
))
     }
     </div>
     </div>
