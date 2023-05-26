import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  //   console.log(hits);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
   
<div className="stories-div">
      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;
        return (
          
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
               <span>By {author}</span>  | <span>{num_comments}</span> comments
              </p>

              <div className="card-button">
                <a href={url} trget="_blank">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(objectID)}>Remove</a>
              </div>
            </div>
        
        );
      })}
      </div>
    </>
  );
};


export default Stories;
