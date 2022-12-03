import ReactDOM from 'react-dom/client';
import './index.css';
import { Title } from './Title/Title';
import { About } from './About/About';
import {Contact} from "./Contact/Contact"
import "./Header/HeaderStyles.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <header className="header-container">
      <Title/>
    </header>
    <section className="content-container">
      <About/>
    </section>
    <footer>
      <Contact/>
    </footer>
  </>
);
