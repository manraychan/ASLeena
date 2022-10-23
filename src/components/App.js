
import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import About from './About';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

const App = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  </HashRouter>
);

export default App;