import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
//import Login from '../components/Login';

const useAuth = () => {
    try {
        let data = sessionStorage.getItem('userLoginStorage');
        data = JSON.parse(data);
        //let data = { _id: "gg" }

        if (data._id) {
            const user = { loggedIn: true }
            return user && user.loggedIn;
        } else {
            const user = { loggedIn: false }
            return user && user.loggedIn;
        }
    } catch (error) {
        const user = { loggedIn: false }
        return user && user.loggedIn;
    }


}

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/' />;

}

export default ProtectedRoute;