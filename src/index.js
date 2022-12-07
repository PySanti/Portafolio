import ReactDOM from 'react-dom/client';
import './index.css';
import { Title } from './Title/Title';
import { About } from './About/About';
import {Contact} from "./Contact/Contact"
import { Projects } from './Projects/Projects';
import { Tecnos } from './Tecnos/Tecnos';
import { SlideMenu } from './SlideMenu/SlideMenu';
import { setTecnosAnimation } from './Tecnos/func/setTecnosAnimation';
import { ScrollCharger } from './ScrollCharger/ScrollCharger';
import { setScrollCharger } from './ScrollCharger/func/setScrollCharger';


export const tecnosClassName = "tecnos-container__list__item"
export const scrollChargerClassName = "scroll-charger__content"
export const scrollChargerITEMClassName = "scroll-charger__charge"
export const maxScrolling = 5;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <SlideMenu/>
  <ScrollCharger/>
  <div className="main-container">
    <Title/>
    <About/>
    <Tecnos/>
    <Projects/>
    <Contact/>
  </div>
  </>
);

setTimeout(() => {
  setTecnosAnimation()
  setScrollCharger()
}, 0)