import React from 'react';

const h4 = (focus) => {
  if(focus){
    return (<h4>{focus}</h4>);
  }
}

const Header = (props) => (
  <div className="m-0 p-0">
    <header className="container">
      <div className="row">
        <h1><a href="/#/home" id="LWR">Logan Reynolds</a></h1>
        <nav id="hrefpNav" className="text-right">
          <a href="/#/about">About</a>
          <a href="/#/education">Education</a>
          <a href="/#/experience">Experience</a>
          <a href="/#/contact">Contact</a>
        </nav>
      </div>
    </header>
    <section className="jumbotron">
      <div className="container">
        <div className="row">
          <h2>{props.page}</h2>
          
        </div>
        <div className="row">
        {h4(props.focus)}
        </div>
      </div>
    </section>
  </div>
);

export default Header;