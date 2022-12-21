import ReactDOM from 'react-dom/client';
import './index.css';
import { Title }                      from './Pages/Title/Title';
import { About }                      from './Pages/About/About';
import {Contact}                      from "./Pages/Contact/Contact"
import { Projects }                   from './Pages/Projects/Projects';
import { Tecnos }                     from './Pages/Tecnos/Tecnos';
import { activateAboutContainer }     from './Pages/About/func/activateAboutContainer';
import { activateTecnos }             from './Pages/Tecnos/func/activateTecnos';
import { activateContact }            from './Pages/Contact/func/activateContact';
import { activateProjects }           from './Pages/Projects/func/activateProjects';
import { activateTitle }              from './GeneralFuncs/activateTitle';

export const projectsTitleClassName                     = "projects-container__title"
export const projectsContainerTITLE_ACTIVATEDClassName  = "projects-container__title__ACTIVATED"
export const projectsContainerTITLE_UN_SHOWEDClassName  = "projects-container__title__UNSHOWED"
export const projectsTitleMADEClassName                 = "projects-container__title__made"
export const projectsTitleMADE__ACTIVATEDClassName      = "projects-container__title__made__ACTIVATED"

export const projectItemClassName                       = "project-item"
export const projectItemContainerClassName              = "projects-container__projects_list"
export const projectItem_ACTIVATEDClassName             = "project-item__ACTIVATED"
export const projectItem_SHOWEDClassName                = "project-item__SHOWED"
export const projectsContainerClassName                 = "projects-container"

export const contactContentClassName                    = "contact-content"
export const contactContentTITLEClassName               = "contact-content__title"
export const contactContentTITLE_MEClassName            = "contact-content__title__me"
export const contactContentPARAPHClassName              = "contact-content__paraph"
export const contactContentPARAPH_P1ClassName           = "contact-content__paraph__p1"
export const contactContentPARAPH_P2ClassName           = "contact-content__paraph__p2"

export const tecnosTitleClassName                       = "tecnos-container__title"
export const tenocsTitleDOMClassName                    = "tecnos-container__title__dom"
export const tecnosListClassName                        = "tecnos-container__list"
export const tecnoCountClassName                        = "tecno-count"
export const tecnoBarClassName                          = "tecno-bar"


export const maxScrolling = 5;

export const titleClassName                             = "header-container__text"
export const titleNAMEClassName                         = "header-container__text__intro-text"

export const aboutContainerClassName                    = "about-container"
export const aboutContainerTITLEClassName               = "about-container__title"
export const aboutContainerTITLE_COMPClassName          = "about-container__title__comp"
export const aboutContainerPARAPHClassName              = "about-container__paraph"
export const aboutContainerPARAPH_KEYWORDSClassName     = "about-container__paraph__u"

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
  </>
);
export const pagesAnimation = {
  1 : {
    done : false,
    func : activateAboutContainer
  },
  2 : {
    done : false,
    func : activateTecnos
  },
  3 : {
    done : false,
    func : activateProjects
  },
  4 : {
    done : false,
    func : activateContact
  }
}

setTimeout(() => {
  activateTitle(titleClassName)
}, 0)