import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './index.css'
import { useContext } from 'react';
import { userContext } from '../../Context';
const Index = () => {

  const {theme, setTheme} = useContext(userContext);
  // const [count, setCount] = useState(0);
  const MyTodoCount=useSelector((state)=>state.MyTodosCount.value)
  
  // const getList = () => {
  //   fetch("http://localhost:3001/todos")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     setCount(res.length);
  //     console.log(res)
  //     console.log(count)
  //   })
  // }
  // useEffect(() => {
  //   getList()
  // },[])
  


  function handleClickOnBtn() {
    setTheme(!theme);
  }


  return (
    <>
    
      <Navbar className='bg-nav'  expand="lg">
      
        <Navbar.Brand as={NavLink} to="table">My todos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink}  to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="addtodo">AddTodo<Badge bg="danger">{MyTodoCount}</Badge></Nav.Link>
            <Nav.Link as={NavLink} to="mui">MuiTable</Nav.Link>
            <Nav.Link as={NavLink} to="temp">Temp</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    <Container>
      <div className="d-flex justify-content-end my-3">
      <Button onClick={handleClickOnBtn} variant="primary">
        toggle
      </Button>
    </div>
  </Container>
    </>
  );
}

export default Index;