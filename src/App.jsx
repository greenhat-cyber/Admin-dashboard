

import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Courses from './Pages/Courses/Courses';
import Payment from './Pages/Payment/Payment';
import AppDownloads from './Pages/App-downloads/App-downloads';
import Notifications from './Pages/Notifications/Notifications';



function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path="/" element={<Courses/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/app-downloads" element={<AppDownloads/>}/>
        <Route path="/notification" element={<Notifications/>}/>
      </Routes>
    
      
    </div>
  );
}

export default App;
