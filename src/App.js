import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavbarC';
import Home from './pages/Home/Index';
import TodoLayout from './components/TodoLayout/index' ;
import Todo from './pages/AddTodo';
import Table from './pages/Table';
import TodosEdit from './pages/TodosEdit/Index';
import MuiTable from './components/MuiTable/index'; 
import { userContext } from './Context';
import { useState } from 'react';
import Temparature from './components/Temparatur'
const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <userContext.Provider value={{theme,setTheme}} >
    <BrowserRouter>
      <Routes>
        <Route element={<TodoLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route index path="table" element={<Table />}/>
          <Route path="addtodo" element={<Todo />}/>
          <Route path="todo/:id" element={<TodosEdit />}/>
          {/* <Route path="*" element={<NoPage />}/> */}
          <Route path="mui" element={<MuiTable />}/> 
          <Route path="temp" element={<Temparature />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
  )
}

export default App