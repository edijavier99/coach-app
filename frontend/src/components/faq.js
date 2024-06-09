import React, { useState } from "react";
import "../styles/faq.css";

export const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <section id="faq">
            <header className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            </header>
            <main className="faq-body">
                <article className="row col-7 mx-auto">
                    <div className="faq-question-icon col-2">
                        <i className="fa-solid fa-question"></i>
                    </div>
                    <div className="faq-question col-10">
                        <div className="p-4">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</div>
                    </div>
                </article>
                <article className="row col-7 mx-auto">
                    <div className="faq-answer col-10 p-4">
                        <div id="card-description" className={expanded ? "expanded" : ""}>
                            <p className="card-text">
                                <i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</i>
                            </p>
                        </div>
                    </div>
                    <div className="faq-answer-icon col-2" onClick={handleExpandClick}>
                        <i className="fa-regular fa-comment"></i>
                    </div>
                </article>
                <article className="row col-7 mx-auto">
                    <div className="faq-question-icon col-2">
                        <i className="fa-solid fa-question"></i>
                    </div>
                    <div className="faq-question col-10">
                        <p className="p-4">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
                    </div>
                </article>
                <article className="row col-7 mx-auto">
                    <div className="faq-answer col-10">
                        <p className="p-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    </div>
                    <div className="faq-answer-icon col-2">
                        <i className="fa-regular fa-comment"></i>
                    </div>
                </article>
            </main>
        </section>
    );
};
