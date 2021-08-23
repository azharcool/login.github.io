import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Arrow from './pages/Arrow';
import PropTypes from 'prop-types';
import Header from './UI/Header';
import './css/style.css';
import Footer from './UI/Footer';
import TabPanel from './pages/Arrow'
import Mobile from './pages/Mobile'
import Tablet from './pages/Tablet'
import Laptop from './pages/Laptop';
import Desktop from './pages/Desktop';
import Ram from './pages/Ram';
import Speaker from './pages/Speaker';
import Headphone from './pages/Headphone';

export default function Root() {
      return (
        <div className='root-wrapper'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/home"  component={Home}/>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact"  component={Contact} />
                    <Route exact path="/Account"  component={Account} />
                    <Route exact path="/"  component={TabPanel} />
                    <Route exact path="/"  component={Mobile} />
                    <Route exact path="/"  component={Tablet} />
                    <Route exact path="/"  component={Laptop} />
                    <Route exact path="/"  component={Desktop} />
                    <Route exact path="/"  component={Ram} />
                    <Route exact path="/"  component={Speaker} />
                    <Route exact path="/"  component={Headphone} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
        );
}
