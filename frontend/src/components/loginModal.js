import React from "react";
import { useNavigate } from "react-router-dom";
import { AdminLoginForm } from "./forms/adminLoginForm";

export const LoginModal = () => {
    const access_token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    const handleLoginClick = () => {
        if (access_token) {
            navigate('/admin'); // Redirigir a la página de administrador si hay access_token
        }
    };

    return (
        <>
            {access_token ? (
                <a type="button" className="btn adminButton" href="/admin">
                    Admin
                </a>
            ) : (
                <a
                    type="button"
                    className="btn adminButton"
                    data-bs-toggle="modal"
                    data-bs-target="#LoginModal"
                    onClick={handleLoginClick}
                >
                    Login
                </a>
            )}

            <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="LoginModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AdminLoginForm />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

