import ReactDOM from 'react-dom/client';
import './index.css';
import { Title } from './Title/Title';
import { About } from './About/About';
import {Contact} from "./Contact/Contact"
import { Projects } from './Projects/Projects';
import { Tecnos } from './Tecnos/Tecnos';
import { SlideMenu } from './SlideMenu/SlideMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <SlideMenu/>
  <div className="main-container">
    <Title/>
    <About/>
    <Tecnos/>
    <Projects/>
    <Contact/>
  </div>
  </>
);
