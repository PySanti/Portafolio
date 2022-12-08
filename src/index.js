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
import { activateTitle } from './Title/func/activateTitle';
import { activateScrollCharger } from './ScrollCharger/func/activateScrollCharger';
import { activateAboutContainer } from './About/func/activateAboutContainer';


export const tecnosClassName = "tecnos-container__list__item"
export const scrollChargerClassName = "scroll-charger"
export const scrollChargerCONTENTClassName = "scroll-charger__content"
export const scrollChargerCHARGEClassName = "scroll-charger__charge"
export const maxScrolling = 5;
export const titleClassName = "header-container__text"
export const titleNAMEClassName = "header-container__text__intro-text"
export const aboutContainerClassName = "about-container"
export const aboutContainerTITLEClassName = "about-container__title"
export const aboutContainerPARAPHClassName = "about-container__paraph"
export const aboutContainerPARAPH_WORDSClassName = "about-container__paraph__word"
export const aboutContainerPARAPH_KEYWORDSClassName = "about-container__paraph__u"
export const aboutContainerKeyWords = {
  "content" : "Universidad Catolica Andres Bello",
  "href" : "https://elucabista.com/2022/06/09/qs-world-university-ranking-2023-la-ucab-sigue-siendo-la-mejor-universidad-privada-venezuela/",
}
export const pagesAnimation = {
  1 : {
    done : false,
    func : activateAboutContainer
  }
}
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
    <Contact email="santiagodeandrade4@gmail.com"/>
  </div>
  </>
);

setTimeout(() => {
  activateTitle()
  activateScrollCharger()
  setTecnosAnimation()
  setScrollCharger()
}, 0)