import React,{useState} from "react";
import "./style.css";

function Form() {
  const [loisir,setLoisir]=useState([])
  const handleAdd = (e) => {
    e.preventDefault()
    alert(loisir.join(','))
  }
  const checkL = (e)=>{
    if(!loisir.includes(e.target.value)){
      setLoisir([...loisir,e.target.value])
    }
    else{
      setLoisir([...loisir.filter((item)=>item !== e.target.value)])
    }
  }
  return (
    
      <form onSubmit={handleAdd}>
    <input type="checkbox" name="loisir" value="sport" onChange={checkL}/>
    <input type="checkbox" name="loisir" value="music" onChange={checkL}/>
    <input type="checkbox" name="loisir" value="read" onChange={checkL}/>
    <input type="submit"value="S'inscrire"/>
    </form>
  );
}
export default Form;