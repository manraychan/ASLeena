import React from 'react';
import Schools from './Schools';

const EdSection = (props) => {

    return (
        <div className="col-sm-6 p-3">
          <div className='card pb-4'>
            <img src={props.src} alt={props.alt} />
            <p className="font-weight-bold card-title px-3 ">{props.title}</p>
            <div className='pl-4'>
              <Schools data={props.schools} />
            </div>
          </div>
        </div>
    );
}

export default EdSection;