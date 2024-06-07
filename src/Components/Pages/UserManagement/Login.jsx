import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserManagement from '../../../Axios/UserManagement';

function Login() {
    const [inputs, setInputs] = useState({});
    const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success
    const navigation = useNavigate();

    const inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const logUser = (e) => {
        e.preventDefault();

        UserManagement.loginUser(inputs).then(res => {
            if (res.data.length === 0) {
                window.alert(`Check Email And Password!`);
            } else {
                sessionStorage.setItem("userLoginStorage", JSON.stringify(res.data));
                if (res.data.userType === 'user') {
                    setLoginSuccess(true); // Set login success state to true
                    setTimeout(() => {
                        navigation('/dashboard');
                    }, 2000); // Redirect after 2 seconds
                }
            }
        });
    }

    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <br />
                        <br />
                        <br />
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block">
                                        <img width={"110%"} height={"80%"} src="https://wpadminify.com/wp-content/uploads/2021/09/pre-built-wordpress-login-page-template.webp" />
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <br />
                                            <form class="user" onSubmit={logUser}>
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user" name='email' onChange={inputHandler}
                                                        placeholder="Enter Email Address" required />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control form-control-user" name='password' onChange={inputHandler}
                                                        placeholder="Enter Password" required />
                                                </div>
                                                <br />
                                                <br />
                                                <input type="submit" class="btn btn-primary btn-user btn-block" value="Login" />
                                            </form>
                                            {loginSuccess && ( // Conditional rendering of login success message
                                                <div class="alert alert-success mt-3" role="alert">
                                                    Login successful! Redirecting to dashboard...
                                                </div>
                                            )}
                                            <hr />
                                            <div class="text-center">
                                                <a class="small" href="/register">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
