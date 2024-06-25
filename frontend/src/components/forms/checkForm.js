import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


export const CheckForm = () => {
    const [showAlert, setShowAlert] = useState(false)
    const form = useRef(); 
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE , form.current, process.env.REACT_APP_EMAIL_PUBLIC_ID)
        .then(
            () => {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2500);
            setFormData({
                email: "",
            });
            },
            (error) => {
            console.log('FAILED...', error); // Muestra el objeto de error completo
            }
        );

    };

  return (
    <div className="contact-form-container">
      <form className="contactForm" ref={form} onSubmit={handleSubmit}>

        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
              <label htmlFor="emailInput">Email</label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary w-100 my-3 py-2" type="submit">
          Submit
        </button>
        <p className="mt-3 mb-3 text-body-secondary">
          © 2017–2024 
        </p>
        </form>
        {showAlert && <div className="alert alert-success" role="alert">
            The form was submitted successfully! Thank you.
        </div>
        }
    </div>
  );
};