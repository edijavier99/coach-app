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
        <a className="btn booking" href="/process">
            Make A Booking
        </a>
    ) : (
        <a
            className="btn booking"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            Make A Booking
        </a>
    );
};
