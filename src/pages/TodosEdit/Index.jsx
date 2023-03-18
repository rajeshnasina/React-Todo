import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const TodosEdit = () => {
  const initialDetails = {
    title : "",
    completed : true,
    target:"",
    updatedAt: '',
    createdAt: ''
  }
  
  const navigate = useNavigate();
  const params=useParams();
  const id=params.id
  const [state, setState] = useState(initialDetails);
  const [title,setTitle]=useState('');
  const [target,setTarget]=useState('');
  const [check,setCheck] = useState('Incompleted')
  const presentDate = new Date(); 
  const updatedTime = presentDate.toLocaleDateString();
  // const createdat=new Date();
const userInputs={
  title :title,
  completed : check,
  target:target,
  updatedAt: updatedTime,
  createdAt: updatedTime
  }
  
  const options = {
    method : "get",
    
  }  

  useEffect(()=>{
    fetch(`http://localhost:3001/todos/${id}` , options)
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
    setTitle(res.title)
    setTarget(res.target) 
    

  })
  .catch((err) => {
    console.log(err)
  })
  },[])

  
  
  function handleSubmit(event) {
    event.preventDefault() ;
    let titleEl = document.getElementById("formValidation");
    let errorMsgEl = document.getElementById("errorMsg");
    if(titleEl.value.length == 0) {
      errorMsgEl.textContent = "*Required";
      errorMsgEl.style.color = "red";
    }
    else if(titleEl.value.length <= 5) {
      errorMsgEl.textContent = "min 5 characters are required";
      errorMsgEl.style.color = "red";
    } else {
      let options={
        method:'put',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userInputs)
      }
  
      fetch(`http://localhost:3001/todos/${id}` , options)
      .then((res)=> res.json()
      )
      .then((res)=>{
        console.log(res);
        
      })
      .catch((er)=>{
        console.log(er)
      })
    }
   
    
    
  }
  function checkStatus() {
    setCheck("Completed")
    console.log(check)
  }

return (
    <Container className='my-5 w-50' >
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" id="formValidation" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <p id="errorMsg"></p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='completed' label="Todo Status" onClick={checkStatus} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Target</Form.Label>
        <Form.Control type="date" name='target' value={target} onChange={(e)=>setTarget(e.target.value)}/>
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default TodosEdit;