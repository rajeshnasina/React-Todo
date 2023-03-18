import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from '../../Context';
import MaterialTable from '@material-table/core';
function Mui(){
  
    const [data, setData] = useState([])
    // const [userList, setUserlist] = useState([]);
    // const [filterData, setFilterData] = useState([]) 
    const {theme, setTheme} = useContext(userContext)
    const style = theme && "dark" ;
    const columns = [
      {title: "S.No", field:""},
      { title: "ID", field: "id" },
      { title: "Title", field: "title" },
      { title: "Completed", field: "completed" },
      { title: "Target", field: "target" },
      { title: "UpdatedAt", field: "updatedAt" },
      { title: "CreatedAt", field: 'createdAt' }
    ]
    useEffect(() => {
      fetch("http://localhost:3001/todos")
        .then(resp => resp.json())
        .then(resp => {
          setData(resp)
          console.log(resp )
          // setUserlist(resp)
          // setFilterData(resp)
        })
    }, [])
    
    function handleChange(event) {
      console.log(event.target.value)
    }

    return (
      <div className={`${style}`}>
        
        <MaterialTable  onChange={handleChange}
          title="Todos Task"
          data={data}
          columns={columns}
        />
      </div>
    );
}
export default Mui;