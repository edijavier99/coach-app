import React, { useState } from 'react';
import Swal from 'sweetalert2';


export const WelcomeForm = ({ setAutoProceed }) => {
    const [welcomeForm, setWelcomeForm] = useState({
        userName: "",
        userSurname: "",
        userEmail: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWelcomeForm({
            ...welcomeForm,
            [name]: value
        });
    };

    const handleReset = () => {
        setWelcomeForm({
            userName: "",
            userSurname: "",
            userEmail: ""
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}api/client/create`;

        Swal.fire({
            title: 'Confirm Email',
            text: 'Have you correctly entered your email address?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, continue',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(apiUrl, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            client_name: welcomeForm.userName,
                            client_surname: welcomeForm.userSurname,
                            client_email: welcomeForm.userEmail
                        })
                    });
                    if (response.ok) {
                        handleReset();
                        localStorage.setItem("verified_user", "true");
                        setAutoProceed(true); // Signal to parent component to proceed automatically
                    } else {
                        console.error("Failed to submit form.");
                    }
                } catch (error) {
                    console.error("Error submitting form:", error);
                }
            }
        });
    };

    return (
        <form id="welcome-form" className="mt-5" onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-floating d-flex mb-3 col-12 col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="user-name"
                        value={welcomeForm.userName}
                        required
                        onChange={handleInputChange}
                        name="userName"
                        placeholder="Name"
                    />
                    <label htmlFor="user-name" className="ps-4">
                        Name
                    </label>
                </div>
                <div className="form-floating mb-3 col-12 col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="user-surname"
                        value={welcomeForm.userSurname}
                        required
                        onChange={handleInputChange}
                        name="userSurname"
                        placeholder="Surname"
                    />
                    <label htmlFor="user-surname" className="ps-4">
                        Surname
                    </label>
                </div>
                <div className="form-floating mb-3 col-12 col-md-4">
                    <input
                        type="email"
                        className="form-control"
                        id="user-email"
                        value={welcomeForm.userEmail}
                        required
                        onChange={handleInputChange}
                        name="userEmail"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="user-email" className="ps-4">
                        Email address
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Continue
            </button>
        </form>
    );
};