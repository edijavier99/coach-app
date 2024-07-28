import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "../styles/components/singleArticle.css";

const Loading = () => <p>Loading...</p>;
const Error = ({ message }) => <p>Error: {message}</p>;

const calculateReadingTime = (text,text_two) => {
    const wordsPerMinute = 250; // Promedio de palabras por minuto
    const words = text.split(/\s+/).length;
    const words_two = text_two.split(/\s+/).length;
    const minutes = Math.ceil((words+words_two) / wordsPerMinute);
    return minutes;
};

const formatDate =  (dateString) =>{
    const date = new Date(dateString)
    return date.toISOString().slice(0,10)
}   

export const SingleArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSingleArticle = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}blog/post/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setArticle(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSingleArticle(); // Invoke fetchSingleArticle immediately

    }, [id]); // Dependency array includes 'id'

    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Link copied to clipboard!');
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <section id="single-article">
            {article && <ArticleContent article={article} copyToClipboard={copyToClipboard} />}
        </section>
    );
};

const ArticleContent = ({ article, copyToClipboard }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const readingTime = calculateReadingTime(article.description,article.second_paragraph);

    return (
        <article id="blog-article">
            <header className="row col-10 mx-auto">
                <div className="col-12 text-center">
                    <p className="mt-3 article-category">{capitalizeFirstLetter(article.category)}</p>
                    <h1 className="my-3">{article.title}</h1>
                    <p className="text-muted ">{article.subtitle}</p>
                </div>
            </header>
            <main className="row col-10 mx-auto">
                <div className="article-info d-flex justify-content-center mb-4">
                    <strong className="me-4"> Jesus Antonio</strong> | <span className="mx-4">{formatDate(article.day_posted)}</span> | <span className="ms-4">{readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</span>
                </div>
                
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.description) }}
                    />
                    <div className="col-12 col-md-6 col-lg-6 article-image-container my-5">
                        <img src={article.image_url} alt={`${article.title}`} />
                    </div>
                </div>

                <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-6 article-image-container my-5">
                        <img src={article.image_url_tow} alt={`${article.title}`} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.second_paragraph) }}
                    />   
                </div>
                
            </main>
            <footer className="row mx-auto col-10 mt-5 text-center">
                <div className="share-buttons bg-dark text-light mb-4">Share Article
                    <i className="fa-solid fa-copy ms-3" onClick={copyToClipboard}></i>
                </div>
                {/* Button to copy link */}
            </footer>
        </article>
    );
};
