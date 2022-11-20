
import React from 'react';
import Project from './Project';

const ProjectContainer = (props) => {
    let projects = props.data.map((project) => {
        return <Project src={project.img.src}
                        alt={project.img.alt}
                        title={project.title}
                        paragraph1={project.paragraph1}
                        platform={project.skills.platform}
                        focus={project.skills.focus}
                        tech={project.skills.tech}
                        paragraph2={project.paragraph2}
                        projectLink={project.projectLink}
                        codeLink={project.codeLink} 
                        tutorial={project.tutorial}
                        key={`Project_Card_${project.title}`}/>
    });
    return(
        <div className="card-columns">
            {projects}
        </div>
    );
}

export default ProjectContainer;