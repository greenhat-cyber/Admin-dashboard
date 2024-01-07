import React from 'react'
import Header from '../Components/Header/Header'
import { Navigate, Outlet } from 'react-router-dom'

const Defalut = () => {
    let auth = localStorage.getItem("admin-token");
  return (
    <div>
        <Header/>
        <main>
            {auth ? <Outlet /> : <Navigate to={"/login"} />}
        </main>
    </div>
  )
}

export default Defalut