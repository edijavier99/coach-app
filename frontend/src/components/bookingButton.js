import React, { useState, useEffect } from 'react';


export const BookingButton = () => {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const verifiedUser = localStorage.getItem("verified_user");
        if (verifiedUser) {
            setVerified(true);
        }
    }, []);

    return verified ? (
        <a className="btn booking my-3" href="/process">
            Make A Booking
        </a>
    ) : (
        <button
            className="btn booking my-3"
            data-bs-toggle="modal"
            data-bs-target="#HeroLoginModal"
        >
            Make A Booking
        </button>
    );
};
