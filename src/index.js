import ReactDOM from 'react-dom/client';
import './index.css';
import { Title } from './Title/Title';
import { About } from './About/About';
import {Contact} from "./Contact/Contact"
import "./Header/HeaderStyles.css"
import { Projects } from './Projects/Projects';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Title/>
    <About/>
    <Projects/>
    <Contact/>
  </>
);
