import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [loginForm, setLoginForm] = useState({
        loginEmail: "",
        loginPassword: ""
    });
    const [errMessage, setErrorMessage] = useState()

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    };

    const handleReset = () => {
        setLoginForm({
            loginEmail: "",
            loginPassword: ""
        });
    };

    const handleSubtmit = async (e) => {
        e.preventDefault();
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}api/login`;
        
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_email: loginForm.loginEmail,
                    user_password: loginForm.loginPassword
                })
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                handleReset();
                localStorage.setItem("access_token", data.access_token)
                if(data.access_token){
                    navigate('/admin'); // Navegar a la página principal después del login exitoso
                }
            } else {
                throw new Error('Failed to login'); // Forzar un error para mostrar el mensaje de error
            }
    
        } catch (error) {
            console.error("Error login: ", error);
            setErrorMessage(error.message); // Establecer el mensaje de error en el estado
        }
    };
    

    return (
        <section className="row col-5 mx-auto">
            <div className="col-12">
                <form id="login-form" onSubmit={handleSubtmit}>
                    <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" required onChange={handleInputChange} name="loginEmail" value={loginForm.loginEmail} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" required onChange={handleInputChange} name="loginPassword" value={loginForm.loginPassword} placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                </form>
            </div>
            <div className={`alert alert-danger ${errMessage ? 'd-block' : 'd-none'}`} role="alert">
                {errMessage}
            </div>
        </section>
    );
};
