import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import { useDispatch } from "react-redux";
import './index.css';
import { getTodoCount } from "../../Reducers/MyReducer";
import { useContext } from 'react';
import { userContext } from '../../Context';


const TableC = () => {
  const [todoList, setTodoList] = useState([]);
  const navigatesTo = useNavigate();
  const [verifyDelete, setverifyDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(false);
  const dispatch=useDispatch()

  const {theme, setTheme} = useContext(userContext);
  const style = theme && "dark"

  useEffect(() => {
    getAlltodos()
  }, []);
  // console.log(todoList)

  function getAlltodos() {
    fetch("http://localhost:3001/todos")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        
        setTodoList(res);
        dispatch(getTodoCount(res.length))
      })
      .catch((err) => {
        console.log(err);
      });
  }




  function onEdit(id) {
    navigatesTo(`/todo/${id}`);
  }
  let options = {
    method: "delete",
    headers: {
      "content-type": "application/json",
    },
  };
  function onDelete(id) {
    setverifyDelete(true);
    setDeleteId(id);
  }

  function onVerifyClose(result) {
    if (result) {
      fetch(`http://localhost:3001/todos/${deleteId}`, options)
        .then((res) => res.json())

        .then((res) => {
          console.log(res);
          setverifyDelete(false);
          getAlltodos()
         
        })
        .catch((er) => {
          console.log(er);
        });
      // window.location.reload();
    }
    else {
      setverifyDelete(false)
    }
  }

  function renderTableData(data) {
    let tableRow = data.map((each,index) => {
      return (
        <tr key={each.id} >
          <td>{index+1}</td>
          <td>{each.id}</td>
          <td>{each.title}</td>
          <td>{each.completed}</td>
          <td>{each.target}</td>
          <td>{each.createdAt}</td>
          <td>{each.updatedAt}</td>
          <td>
            <i
              onClick={() => onEdit(each.id)}
              className="bi bi-pen-fill m-2"
            ></i>
            <i
              onClick={() => onDelete(each.id)}
              className="bi bi-trash3 m-2"
            ></i>
          </td>
        </tr>
      );
    });
    return tableRow;
  }

  return (
    <div className="mt-5">
      <Container >
        <Table className={`${style}`} striped bordered hover>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Target</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTableData(todoList)}</tbody>
        </Table>
      </Container>

      {verifyDelete ? <ConfirmModal onClose={onVerifyClose}  /> : ""}
    </div>
  );
};

export default TableC;
