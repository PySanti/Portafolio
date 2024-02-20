import React from "react"

import ReactDOM from 'react-dom/client';
import './index.css';
import { Title }                      from './pages/Title';
import { About }                      from './pages/About';
import {Contact}                      from "./pages/Contact"
import { Projects }                   from './pages/Projects';
import { Tecnos }                     from './pages/Tecnos';
import { Map }                        from './components/Map';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  <div className="main-container">
    <Title/>
    <About/>
    <Tecnos/>
    <Projects/>
    <Contact/>
  </div>
  <Map/>
  </>
);
