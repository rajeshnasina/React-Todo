import React, { useRef } from 'react'
import {useReactToPrint} from 'react-to-print';
import { useContext } from 'react';
import { userContext } from '../../Context';
import { CSVLink } from "react-csv";

const Task = () => {

    const outputRef = useRef('');
    const onClick = useReactToPrint({
        content:()=> outputRef.current
    })
    // const onClick = () => {
    // console.log(outputRef.current.innerHTML);
    // const print = outputRef.current.innerHTML; 
    // window.print(print)
    
    // }
  return (
    <div >
      <div  className='bg-color' ref={outputRef}>
        <p>Hello, world!</p>
        <p>I am from useRef</p>
      </div>
      <button  onClick={onClick}>Download</button>
      
    </div>
  );
}

export default Task





