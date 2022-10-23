
import React from 'react';

const schoolName = (school, location, href) => {
    if(href){
        return (
            <span>
                <span className="font-weight-bold"><a className="p-0" href={href}>{school}</a></span>{location}
            </span>
        );
    } else {
        return (
            <span>
                <span className="font-weight-bold card-title">{school}</span>{location}
            </span>
        );
    }
}

const extendedInfo = (moreInfo) => {
    let allInfo = moreInfo.map((element) => {
        return(
            <span>
                <span className="font-weight-bold">{element.title}</span>{element.content}
            </span>
        )
    });
    return allInfo;
}

const secondUl = (focus, skills, moreInfo, credentials) => {
    let focusStr = '';
    focusStr = focus.join(' - ');
    let skillStr = '';
    skills.map((skill) => {
        skillStr += ` ${skill},`;
    });

    let liCredentailTag = ''
    if(credentials){
        liCredentailTag = <li><a className="p-0 font-weight-bold" href={credentials.href}>{credentials.aText}</a></li>
    } 

    if(moreInfo){
        if(typeof moreInfo === "object"){
            return (
                <span>
                    {liCredentailTag}
                    {/* <li><span className="font-weight-bold">Concentrations: </span>{focusStr}</li>
                    <li><span className="font-weight-bold">Skills:</span>{skillStr} etc.</li> */}
                    {extendedInfo(moreInfo)}
                </span>
            );
        } else {
            return (
                <p className='pt-2'>
                    {/* {liCredentailTag} */}
                    {/* <li><span className="font-weight-bold">Concentrations: </span>{focusStr}</li>
                    <li><span className="font-weight-bold">Skills:</span>{skillStr} etc.</li> */}
                    {/* <p>{moreInfo}</p> */}
                </p>
            );
        }
    } else {
        return (
            <span>
                {/* {liCredentailTag} */}
                {/* <li><span className="font-weight-bold">Concentrations: </span>{focusStr}</li>
                <li><span className="font-weight-bold">Skills:</span>{skillStr} etc.</li> */}
                {/* <li>{moreInfo}</li> */}
            </span>
        );
    }
}

const School = (props) => { 
    return (
        <span>
            {schoolName(props.school, props.location, props.href)}
            {secondUl(props.focus, props.skills, props.moreInfo, props.credentials)}
        </span>
    );
}

export default School;