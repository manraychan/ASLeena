
import React from 'react';

//componets
import Header from './Header';
import EdSectionContainer from './education/EdSectionContainer'

//data
import {education} from '../data/education';

const MainContent = () => (
    <section className="container">
      <div className="row">

        <EdSectionContainer data={education} />

      </div>
    </section>     
);

const Education = () => (
    <div>
        <Header page={'Education'} />
        <MainContent />
    </div>
);

export default Education;