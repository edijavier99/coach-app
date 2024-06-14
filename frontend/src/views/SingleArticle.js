import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/components/singleArticle.css";

const Loading = () => <p>Loading...</p>;
const Error = ({ message }) => <p>Error: {message}</p>;

export const SingleArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSingleArticle = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/myapp/api/article/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setArticle(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSingleArticle();
    }, [id]);

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

    const capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <article id="blog-article">
            <header className="row col-10 mx-auto">
                <div className="col-12 text-center">
                    <p className="mt-3">{capitalizeFirstLetter(article.article_category)}</p>
                    <h1 className="my-3">{article.article_title}</h1>
                    <p className="text-muted mb-5">{article.article_subtitle}</p>
                </div>
            </header>
            <main className="row col-10 mx-auto">
                <div className="col-12 col-md-6 article-image-container">
                    <img src={article.article_image_url} alt={`${article.article_title} image`} />
                </div>
                <div className="col-12 col-md-6">
                    <p>{article.article_description && (
                        <>
                            <span className="first-letter">{article.article_description.charAt(0)}</span>
                            {article.article_description.slice(1)}
                        </>
                    )}</p>
                </div>
            </main>
            <footer className="row mx-auto col-10 mt-5 text-center">
                <p className="text-muted">{article.article_day_posted}</p>
                <div className="share-buttons">
                    <p className="mb-2 text-muted">Share this article</p>
                    {/* Botones de compartir */}
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <i class="fa-solid fa-copy"  onClick={copyToClipboard}></i>
                </div>
                {/* Botón para copiar enlace */}
            </footer>
        </article>
    );
};
