import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"

const SharedLayouts = () => {
  return (
    <>
    <Sidebar />
    <Outlet />
</>
  )
}

export default SharedLayouts