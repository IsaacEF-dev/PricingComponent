import { useState } from "react";
import { useEffect } from "react"


export const Toggle = ({toggle,setToggle}) => {


    const onToggle=(e)=>{
        toggle ? setToggle(false):setToggle(true);
    }

    
    
  return (
    <div className="container__toggle  ">
        <p className="membresia">Annually</p>
        <div className="toggle mx-0" >
            <input type="checkbox" className="toggle_input" />
            <div className={`toggle-fill ${(toggle)?"active":""}`} onClick={onToggle} ></div>
        </div>
        <p className="membresia">Monthly</p>
    </div>
   
  )
}
