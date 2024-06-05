import React from "react"
import "../styles/faq.css"

export const FAQ = () =>{
    return(
        <section id="faq">
            <header className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters </p>
            </header>
            <main className="faq-body">
                <article className="row col-7 mx-auto">
                    <div className="faq-question-icon col-2">
                        <i class="fa-solid fa-question"></i>
                    </div>
                    <div className="faq-question col-10">
                        <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
                    </div>
                </article>
                <article className="row col-7 mx-auto">
                    <div className="faq-answer col-10">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    </div>
                    <div className="faq-answer-icon col-2">
                        <i class="fa-regular fa-comment"></i>
                    </div>
                </article>
                
            </main>
        </section>
    )
}