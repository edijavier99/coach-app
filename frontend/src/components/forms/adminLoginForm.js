import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css"

export const AdminLoginForm = () => {

    const [loginForm, setLoginForm] = useState({
        emailInput: "",
        passwordInput: ""
    });
    const [errMessage, setErrorMessage] = useState()

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    };

    const handleReset = () => {
        setLoginForm({
            emailInput: "",
            passwordInput: ""
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}api/login`;
        
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_email: loginForm.emailInput,
                    user_password: loginForm.passwordInput
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
        <>
            <form className="loginForm"  onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        name="emailInput"
                        value={loginForm.emailInput}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                    />
                    <label htmlFor="emailInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        name="passwordInput"
                        value={loginForm.passwordInput}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="passwordInput">Password</label>
                </div>
                <button className="btn btn-primary w-100 my-3 py-2" type="submit">
                Submit
                </button>
                <div className={`alert alert-danger ${errMessage ? 'd-block' : 'd-none'}`} role="alert">
                    {errMessage}
                </div>
            </form>
            
    </>
    );
};
