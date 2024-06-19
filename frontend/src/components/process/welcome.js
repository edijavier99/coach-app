import React, { useState } from 'react';

export const Welcome = ({ setAutoProceed }) => {
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
                localStorage.setItem("welcome_first_time", "true");
                setAutoProceed(true); // Indicar al componente Process que avance automáticamente
            } else {
                console.error("Failed to submit form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div id="welcome" className="container-fluid">
            <div className="row">
                <h3>Welcome to Your First Step Towards Change</h3>
                <p>
                    I am delighted that you have taken this decision. To ensure I can
                    genuinely assist you, I offer a complimentary first session of 30
                    minutes for us to get acquainted. This initial meeting is crucial
                    for establishing clear communication and understanding your goals
                    and objectives. It also provides an opportunity to discuss how I
                    can best support you on your journey.
                </p>
                <p>Feel free to proceed, and I look forward to working with you.</p>
            </div>
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
                    SEND
                </button>
            </form>
        </div>
    );
};
