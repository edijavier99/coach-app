import React, { useState } from "react";
import "../../styles/login.css";

const AddWeightRecord = ({ client_id }) => {

    const [recordForm, setRecordForm] = useState({
        weightValue: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecordForm({
            ...recordForm,
            [name]: value,
        });
    };

    const handleReset = () => {
        setRecordForm({
            weightValue: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}api/create-weight-graphic/${client_id}/`;
    
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    value: parseFloat(recordForm.weightValue), // Convertir a número flotante
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setMessage("Successfully created new record");
                handleReset();
            } else {
                throw new Error("Failed to create record"); // Forzar un error para mostrar el mensaje de error
            }
        } catch (error) {
            console.error("Error creating new record: ", error);
        }
    };
    

    return (
        <>
            <form className="loginForm" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="weightValue"
                        name="weightValue"
                        value={recordForm.weightValue}
                        onChange={handleChange}
                        placeholder="Enter weight value"
                        required
                    />
                    <label htmlFor="weightValue">Add new weight</label>
                </div>
                <button className="btn btn-primary w-100 my-3 py-2" type="submit">
                    Submit
                </button>
                <div className={`alert alert-success ${message ? "d-block" : "d-none"}`} role="alert">
                    {message}
                </div>
            </form>
        </>
    );
};


export default AddWeightRecord