import React from 'react';

import Header from './Header';

const ContactInfo = () => (
    <div className="col-sm-6">
        <ul>
            {/* <li>Cell: <a className="p-0" href='tel:4158860145'>‪(415) 886-0145</a></li> */}
            <li>Email: <a className="p-0" href="mailto:engineerlwr@gmail.com?subject=Seen%20Portfolio%20Site">EngineerLWR@gmail.com</a></li>
            <li>Current Location: Greater San Francisco City Area</li>
            <li>GitHub: <a className="p-0" href="https://github.com/LWRGitHub">GitHub.com/LWRGitHub</a> </li>
            <li>LinkedIn: <a className="p-0" href="https://www.linkedin.com/in/logan-reynolds/">Linkedin.com/in/Logan-Reynolds/</a></li>
            <li>Resume: <a className="p-0" href="files/logan-reynolds-resume.pdf">PDF</a></li>
        </ul>  
</div>
);
const GMap = () => (
    <div className="col-sm-6">
        <iframe className="map-center ml-4 border-0" style={{width: '90%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201879.9713778576!2d-122.57785017067407!3d37.75781489551214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1579829066660!5m2!1sen!2sus" frameborder="0"  allowfullscreen=""></iframe>
    </div>
);

const Contact = () => (
    <div>
        <Header page={'Contact Me'} />
        <section className="container">
            <div className="row">
                <ContactInfo />
                <GMap />
            </div>
        </section>
    </div>
);

export default Contact;