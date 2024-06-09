import React from "react"
import "../styles/footer.css"

export const Footer = () =>{
    return(
        <footer id="footer" className="container-fluid">
            <div className="row ">
                <div className="col-md-10 mx-auto">
                    <h4>Request More Information</h4>
                    <p>pruebaa</p>
                    <div className="col-4 mx-auto text-center pb-3">
                        <a className="booking bookingHero" href="/appointment">Make A Booking</a>
                    </div>
                    <p>@2019 App</p>
                </div>
            </div>
            <hr/>
            <div className="row">
                <img alt="logo"  src=""/>
                <ul>

                </ul>
                <ul>

                </ul>
            </div>
        </footer>
    )
}