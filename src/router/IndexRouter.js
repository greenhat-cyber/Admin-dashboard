import React from 'react'
import Defalut from '../Layout/Defalut'
import Courses from '../Pages/Courses/Courses'
import Payment from '../Pages/Payment/Payment'
import AppDownloads from '../Pages/App-downloads/App-downloads'
import Notifications from '../Pages/Notifications/Notifications'
import Login from '../Pages/Auth/Login'
import { Route, Routes } from 'react-router-dom'

const IndexRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Defalut/>}>
         <Route path="/" element={<Courses/>}/>
         <Route path="/payment" element={<Payment/>}/>
         <Route path="/app-downloads" element={<AppDownloads/>}/>
         <Route path="/notification" element={<Notifications/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default IndexRouter