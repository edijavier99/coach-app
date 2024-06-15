import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from '../store/appContext';
import "../styles/components/allArticles.css";
import { useNavigate } from "react-router-dom";

export const AllArticles = () => {

    const { actions, store } = useContext(Context);
    const [articlesList, setArticlesList] = useState([]);
    const navigate = useNavigate();
    const [articleToDelete, setArticleToDelete] = useState();
    const actionsRef = useRef(actions);
    
    useEffect(() => {
        actionsRef.current = actions;
    }, [actions]);

    useEffect(() => {
        if (actionsRef.current && actionsRef.current.fetchAllArticles) {
            actionsRef.current.fetchAllArticles();
        } else {
            console.error("fetchAllArticles is not defined");
        }
    }, []);

    useEffect(() => {
        if (store.allArticles && store.allArticles.length > 0) {
            setArticlesList(store.allArticles);
        }
    }, [store.allArticles]);

    const deleteArticle = () => {
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}api/article/delete/${articleToDelete}`;
        fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                setArticlesList(prevArticles => prevArticles.filter(article => article.id !== articleToDelete));
                setArticleToDelete(null);
            } else {
                console.error("Failed to delete article");
            }
        })
        .catch(error => {
            console.error("Error deleting article:", error);
        });
    }

    const handleEyeClick = (id) => {
        navigate(`/article/${id}`);
    }

    const handlePenClick = (item_id) => {
        actions.fetchSingleArticle(item_id)
        console.log(item_id);
    }

    const showArticles = () => {
        return articlesList.map((item, index) => {
            return (
                <article id="admin_article_list" key={index}>
                    <p>{item.article_title}</p>
                    <div>
                        <i onClick={() => handleEyeClick(item.id)} className="fa-solid fa-eye me-3"></i>
                        <i onClick={() => handlePenClick(item.id)} data-bs-toggle="modal" data-bs-target="#editModal" className="fa-solid fa-pen me-3"></i>
                        <i onClick={() => setArticleToDelete(item.id)} data-bs-toggle="modal" data-bs-target="#deleteModal" className="fa-solid fa-trash"></i>
                    </div>
                </article>
            )
        })
    }

    return (
        <>
            {articlesList.length > 0 ? (
                showArticles()
            ) : (
                <p>Loading articles...</p>
            )}
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-body p-4 text-center">
                            <h5 className="mb-0">Are you sure you want to delete?</h5>
                            <p className="mb-0">You can always change your mind.</p>
                        </div>
                        <div className="modal-footer flex-nowrap p-0">
                            <button type="button" onClick={()=>deleteArticle()} className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" data-bs-dismiss="modal"><strong>Yes, delete</strong></button>
                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">No thanks</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-body p-4 text-center">
                            <h5 className="mb-0">Edit Article</h5>
                        </div>
                        <div className="modal-footer flex-nowrap p-0">
                            <button type="button" onClick={()=>deleteArticle()} className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" data-bs-dismiss="modal"><strong>Yes, delete</strong></button>
                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">No thanks</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
