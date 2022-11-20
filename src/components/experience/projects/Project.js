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
                <a type='a' className="btn btn-outline-secondary p-1 mb-1" href={projectLink}>Project</a>
                <a type='a' className="btn btn-outline-secondary p-1 mb-1" href={codeLink}>GitHub</a>
                {TutorialCheck(tutorial)}
            </div>
        );
    } else {
        return (
            <div className="card-body">
                {/* <h5 className="card-title">Details:</h5>
                <p className="card-text">{paragraph2}</p> */}
                <a type='a' className="btn btn-outline-secondary p-1 mb-1" href={projectLink}>Project</a>
                <a type='a' className="btn btn-outline-secondary p-1 mb-1 disabled">GitHub</a>
                <br />
                <span className="badge badge-danger">Private Code</span>
                {TutorialCheck(tutorial)}
            </div>  
        );
    }
}

const Project = (props) => {
    let platforms = props.platform.map((platform) => {
        return (
            <span className="badge badge-pill badge-dark" key={`${props.title}_${platform}`}>{platform}</span>
        );
    });
    let focus = props.focus.map((focus) => {
        return (
            <span className="badge badge-pill badge-secondary" key={`${props.title}_${focus}`}>{focus}</span>
        );
    });
    let tech = props.tech.map((tech) => {
        return (
            <span className="badge badge-pill badge-light" key={`${props.title}_${tech}`}>{tech}</span>
        );
    });


    return (
        <div className='card'>
            <a className="p-0" href={props.projectLink}>
                <img className="card-img-top" src={props.src} alt={props.alt}/>
            </a>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.paragraph1}</p>
                <div className="card text-center">
                    <div className="card-header">
                        {platforms}
                        {focus}
                        {tech}
                    </div>
                    {InnerCardBody(props.tutorial, props.codeLink, props.paragraph2, props.projectLink)}
                </div>
            </div>
        </div>
    );
}

export default Project;