import React from "react";
import { AdminLoginForm } from "./forms/adminLoginForm";
import { CheckForm } from "./forms/checkForm";

export const CheckModal = ({ selectedForm }) => {

  console.log(selectedForm);
  // Determinar el ID y el data-bs-target dinámico según selectedForm
  const modalId = `checkModal-${selectedForm}`;
  const modalTarget = `#${modalId}`;

  return (
    <>
      <button
        type="button"
        className="btn booking bookingHero"
        data-bs-toggle="modal"
        data-bs-target={modalTarget}
      >
        Make A Booking
      </button>

      <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${modalId}Label`}>Appointment</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="mb-4">Please enter your email to start booking an appointment:</p>
              <CheckForm />
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
