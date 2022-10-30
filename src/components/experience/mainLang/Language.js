import React from 'react';

// cosnt AssociatedLang = (associatedLang) => {

// }

const Language = (props) => {

    let associatedLangs = props.associatedLang.map((associatedLang) => {
        return (
            <li key={`${props.id}_${associatedLang.id}_${associatedLang.level}`}>{associatedLang.id}  <span id="skill-bg" className="badge badge-pill badge-light">{associatedLang.level}</span></li>
        );
    });

    return (
        <div className="col-sm-6 col-md-3">
            <h5>{props.id}  <span id="main-lang-bg" className="badge badge-pill badge-light">{props.level}</span></h5>
            <img src={props.src} alt={props.alt} />
            {/* <ul>
                {associatedLangs}
            </ul> */}
        </div>
    );
}

export default Language;