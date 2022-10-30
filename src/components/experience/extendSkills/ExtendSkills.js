import React from 'react';

const ExtendSkills = (props) => {
    return (
        <section className="container">
            <h2 className="my-5">Extended Knowledge</h2>
            {/* <h3 id="ext-knowledge-bg" className="badge badge-pill badge-secondary">Concentrations</h3>
            <p>Software Engineering - Full Stack Web/Mobile/Application Development - User Experience/User Interface Design - Game Design/Development - Data Science</p> */}
            <div className="row">
                <div className="col-sm-6 col-md">
                    <h3 id="ext-knowledge-bg" className="badge badge-pill badge-light">Expert</h3>
                    
                    <p>{props.experience.expert}</p>
                </div>
                <div className="col-sm-6 col-md">
                    <h3 id="ext-knowledge-bg" className="badge badge-pill badge-light">Proficient</h3>
                    <p>{props.experience.proficient}</p>
                </div>
                <div className="col-sm-6 col-md">
                    <h3 id="ext-knowledge-bg" className="badge badge-pill badge-light">Novice</h3>
                    <p>{props.experience.novice}</p>
                </div>
            </div>
        </section>
    );
}

export default ExtendSkills;