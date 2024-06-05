import React from "react";
import { InlineWidget } from "react-calendly";


export const BookingView = () =>{
    return(
    <div className="App">
        <InlineWidget url="https://calendly.com/edijavier10" />
    </div>
    )
}