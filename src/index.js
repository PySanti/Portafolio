import React from "react"
import ReactDOM from 'react-dom/client';
import './index.css';
import { Title }                      from './Pages/Title';
import { About }                      from './Pages/About';
import {Contact}                      from "./Pages/Contact"
import { Projects }                   from './Pages/Projects';
import { Tecnos }                     from './Pages/Tecnos';
import { Map }                        from './Components/Map';

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
