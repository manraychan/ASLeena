
import React from 'react';

//components
import ProjectContainer from './experience/projects/ProjectContainer';
import MainLangContainer from './experience/mainLang/MainLangContainer';
import ExtendSkills from './experience/extendSkills/ExtendSkills';
import Header from './Header';

//data
import { ProProj, PersonalProj, TutorialProj } from '../data/projects';
import {mainLanguages, experience} from '../data/experiencePgSkillSort';

const Projects = () => (
    <div>
        <section className="container">
            <h2 className="my-5">Professional Projects</h2>
            <ProjectContainer data={ProProj} />
        </section>
        <section className="container">
            <h2 className="my-5">Personal Projects</h2>
            <ProjectContainer data={PersonalProj} />
        </section>
        <section className="container">
            <h2 className="my-5">Tutorial Projects Taken To The Next Level</h2>
            <ProjectContainer data={TutorialProj} />
        </section>
    </div>
);

const Experience = () => (
    <div>
        <Header page={'Experience'} />
        <MainLangContainer  data={mainLanguages} />
        <ExtendSkills experience={experience} />
        <Projects />
    </div>
);

export default Experience;