
import React from 'react';
import EdSection from './EdSection';

const EdSectionContainer = (props) => {
    let edSections = props.data.map((edSection) => {
        return <EdSection   title={edSection.title}
                            src={edSection.img.src}
                            alt={edSection.img.alt}
                            schools={edSection.schools}
                            key={`EdSection_${edSection.title}`} />
    });
    return edSections;
}

export default EdSectionContainer;