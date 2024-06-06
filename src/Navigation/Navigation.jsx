import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from '../Components/dashboard/Dashboard';
import WeatherViewCard from '../Components/weatherView/WeatherViewCard';
import Login from '../Components/Pages/UserManagement/Login';
import Register from '../Components/Pages/UserManagement/Register';


function Navigation() {
    return (
        <Routes>
          
            <Route path='/' element={< Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/weather/:city' element={<WeatherViewCard/>} />
        </Routes>
    )
}

export default Navigation
