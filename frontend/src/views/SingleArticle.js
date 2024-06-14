import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleArticle = () =>{
    const params = useParams()

    useEffect(()=>{
        console.log(params.id);
    }, [])
    return(
        <section id="single-article">

        </section>
    )
}