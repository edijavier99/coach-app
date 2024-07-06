import React, { useState } from 'react';
import "../styles/articles.css"
import CreateArticle from './createArticle';
import { AllArticles } from './allArticles';

const AccordionItem = ({ index, title, activeIndex, setActiveIndex }) => {
    const handleClick = () => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return (
        <button
            className={`accordion-title-button ${index === activeIndex ? 'active' : ''}`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

const Articles = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: 'Create Article',
            content: (
                <CreateArticle />
            ),
        },
        {
            title: 'All Articles',
            content: (
                <AllArticles active={activeIndex === 1} onClickReload={() => window.location.reload()} /> // Pasa la función para recargar la página
            ),
        },
    ];

    return (
        <section id='admin-article' className='container-fluid'>
            <header className='aa-header row col-11 mx-auto my-3 p-4'>
                <h1>Articles Section</h1>
                <p>This section allows you to add, delete, edit, and create articles that will be posted on the blog.</p>
            </header>

            <main className='aa-main row col-11  mx-auto'>
                <div className="accordion-container p-4">
                    <div className="accordion-titles row ">
                        {items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                index={index}
                                title={item.title}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                            />
                        ))}
                    </div>
                    <div className="accordion-contents row">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`accordion-content ${index === activeIndex ? 'show' : ''}`}
                            >
                                <div className="accordion-body">{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Articles;