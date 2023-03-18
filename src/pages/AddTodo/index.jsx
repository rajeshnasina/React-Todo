import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddTodo = () => {

const presentDate = new Date(); 

const navigate = useNavigate();

const validationSchema = Yup.object({
  title: Yup.string().required("Name is required"),
  
});


const [check, setCheck] = useState("Incompleted") 
const [title,setTitle]=useState('');
const [target,setTarget]=useState('');
const userInputs={
  title :title,
  completed : check,
  target:target,
  updatedAt: presentDate.toLocaleDateString(),
  createdAt: presentDate.toLocaleDateString()
  }
  function handleSubmit(event) {
    event.preventDefault();
    let titleEl = document.getElementById("formValidation");
    let errorMsgEl = document.getElementById("errorMsg");
    let errorMsgEl1 = document.getElementById("errorMsg1");
    let dateEl = document.getElementById("date")
    console.log(titleEl.value.length)
    console.log(dateEl.value.length) 
    // if( ) {
    //   errorMsgEl.textContent = "*Required";
    //   errorMsgEl.style.color = "red";
    // } 
    if(titleEl.value.length == 0 && dateEl.value.length == 0) {
      errorMsgEl.textContent = "*Required";
      errorMsgEl.style.color = "red"; 
      errorMsgEl1.textContent = "*Required";
      errorMsgEl1.style.color = "red";
    }
    else if(titleEl.value.length <= 5 && dateEl.value.length <=5) {
      errorMsgEl.textContent = "min 5 characters are required";
      errorMsgEl.style.color = "red";
      errorMsgEl1.textContent = "Date is invalid";
      errorMsgEl1.style.color = "red";
    }
    else {
    let options={
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(userInputs)
    }

    fetch("http://localhost:3001/todos" , options)
    .then((res)=> res.json()
    )
    .then((res)=>{
      console.log(res);
      navigate("/table")
    })
    .catch((er)=>{
      console.log(er)
    })
  }


    
    
  }
  function checkStatus(e) {
    setCheck("Completed")
    console.log(check)
  }
  


  return (
    <Container className='my-5 w-50' >
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control  type="text" name="title" placeholder="Enter Title" id="formValidation" onChange={(e)=>setTitle(e.target.value)}/>
        <p id="errorMsg"></p>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='completed' label="Todo Status" onClick={checkStatus} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Target</Form.Label>
        <Form.Control type="date" name='target' id="date" onChange={(e)=>setTarget(e.target.value)}/>
        <p id="errorMsg1"></p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default AddTodo