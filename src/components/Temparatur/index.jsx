import React from "react";
import { useState } from "react";

import { useEffect } from "react";

import './index.css'
const Index = () => {
    const [temp, setTemp] = useState(24);
    const [color, setColor] = useState("bg-color");

  useEffect(() => {
    tempCount();
  }, [temp]);


  function tempDecrement() {
    setTemp(temp - 1)
  } 

  function tempIncrement() {
    setTemp(temp + 1)
  }

  function tempCount() {
    if (temp < 20) {
      setColor("cold");
    } 
    if (temp > 35) {
      setColor("hot");
    }
     

}
  return (
    <>
      <div className={` ${color}`}>
      <div className="my-5 d-flex flex-column justify-content-center align-items-center ">
        
        <div className="my-5 temp">{temp}°C</div>

        <div >
          <button className="mx-3 button" onClick={tempDecrement}>
            -
          </button>
          <button className="mx-3 button" onClick={tempIncrement}>
            +
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Index 
