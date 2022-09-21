import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {
    const articles = posts.map((ele)=>{
        return (
            <Article 
                key={ele.title}
                title={ele.title}
                date = {ele.date}
                preview = {ele.preview}
                minutes = {ele.minutes}
            />
        );
    })
    return (
        <main>
            {articles}
        </main>
    );    

}

export default ArticleList;