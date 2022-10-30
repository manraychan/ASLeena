import React from 'react';

const TutorialCheck = (tutorial) => {
    if(typeof tutorial == "string"){
        return (
            <a type='a' className="btn btn-outline-secondary p-1 mb-1" href={tutorial}>Tutorial</a>
        );
    } 
}

const InnerCardBody = (tutorial, codeLink, paragraph2, projectLink) => {
    if(typeof codeLink == "string"){
        return (
            <div className="card-body">
                {/* <h5 className="card-title">Details:</h5>
                <p className="card-text">{paragraph2}</p> */}
    