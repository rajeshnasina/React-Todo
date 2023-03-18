import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarC from '../NavbarC'
const index = () => {
  return (
    <>
        <NavbarC/>
        <Outlet />
    </>
    
  )
}

export default index