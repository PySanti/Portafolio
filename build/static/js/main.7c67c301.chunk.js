(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i);a(23),a(24);function s(e){const t=document.getElementsByClassName(e)[0];setTimeout(()=>{t.id="activated-title",t.hasChildNodes()&&t.children[0]&&setTimeout(()=>{t.children[0].id="activated-subtitle"},1e3)},100)}function c(){return Object(n.useEffect)(()=>{s("header-container__text")},[]),o.a.createElement("header",{className:"header-container"},o.a.createElement("h1",{className:"header-container__text title"},"Santiago De Andrade"))}a(25);var l=a(3);const m=Object(l.create)(e=>({renderingState:{},setRenderingState:t=>e(()=>({renderingState:t}))})),d=Object(l.create)(e=>({pageNumber:0,setPageNumber:t=>e(()=>({pageNumber:t}))}));function p(e){const t=m.getState().renderingState,a=m.getState().setRenderingState;t[e]=!0,a(t)}function h(e){return m.getState().renderingState[e]}function u(e){let t=Object(n.useRef)();const a=e=>{let[a]=e;a.isIntersecting&&!h("about")&&(p("about"),s("about-container__title"),setTimeout(()=>{t.current.classList.add("activated-about-container")},500))};Object(n.useEffect)(()=>{if(t.current){new IntersectionObserver(a,{root:null,rootMargin:"0px",threshold:.1}).observe(t.current)}},[]);const i=Math.floor((new Date-new Date("10-16-2005"))/315576e5);return o.a.createElement("section",{className:"about-container"},o.a.createElement("h2",{className:"about-container__title title"},"About",o.a.createElement("span",{className:"about-container__title__comp title__selected-text"},"Me")),o.a.createElement("p",{className:"about-container__paraph",ref:t},"I am ",i," years old and although I am studying computer science at the",o.a.createElement("a",{href:"https://elucabista.com/2022/06/09/qs-world-university-ranking-2023-la-ucab-sigue-siendo-la-mejor-universidad-privada-venezuela/",target:"__blank",className:"about-container__paraph__u selected-text"},"Universidad Catolica Andres Bello"),", I have more than three years of programming experience, gaining knowledge independently. I have very deep knowledge in very specific technologies. My favorite work area is game development, however, the one I have the most experience in is web development. I have an intermediate knowledge of English and I am able to communicate perfectly."))}a(31),a(32);const g="santiagodeandrade111@gmail.com",f=["Python","Django","Django Rest Framework","Database Design","MySQL","PostgreSQL","JavaScript","CSS","Responsive Web Desing","HTML","React","PyGame","C","Git"],y=[{name:"FriendNet",repoLink:"https://github.com/PySanti/friendnet.git",videoId:"friendNet",wil:"The most important project I've done so far: FriendNet, a web messaging application. This project has been very important for my life and for my career as a programmer, I started to develop it shortly after acquiring a lot of knowledge in Django and Django Rest Framework for backend development.  Without a doubt it has been the most challenging project I have ever taken on. It has made me learn a huge amount of things, improving my knowledge in React, zustand, JWT, web security, serializers, middlewares, authentication, endpoints and api's operation, the Django ORM, websockets, among many other things. It's incredible how many stages this project has gone through. It's really emotional for me to think about how much I've made this application grow. Without a doubt the most valuable project in my portfolio. I made it using Django, Python, React, HTML, CSS and JavaScript",mountedLink:"https://friendnet.netlify.app",type:4},{name:"KapaTortas",repoLink:"https://github.com/PySanti/KapaTortas.git",videoId:"kapatortas",wil:"This is a project that is currently under development (11/16/2024). It is being developed by myself and a couple of friends from the university to carry out a venture. It is an E-COMMERCE for selling desserts locally. It will have session management for users, order management, sales and invoices management, connection with Google API, connection with WhatsAPP API, etc. This project is being developed in Next.js + Django Rest Framework.",type:4},{name:"Graphic Binary Trees",repoLink:"https://github.com/PySanti/Graphic-Binary-Trees.git",videoId:"graphicBinaryTree",wil:"One of the projects that i am most proud to show, although few can understand the merit it has and even more the context in which i developed it. This was one of my first 'big projects' that i created shortly after learning how to handle data structures and dynamic memory in C, when i was 14 years old. A few months after learning my first programming language : Pascal. I made this project to be able to see graphically the ordering of a simple binary tree in the terminal. Following one of the traditions that i imposed on myself when i was starting to program, i didn't look for any kind of source or reference to build what i wanted to build, all the code of the project was written and devised by me, including what for me was the most complicated : the algorithm of ordering of the nodes to graph when inserting a new node, a recursive algorithm. ",type:3},{name:"Kremess",repoLink:"https://github.com/PySanti/kremess.git",videoId:"kremess",wil:"A project carried out for Industrias Alimenticias Mogasi, a manufacturer of all kinds of food for the home. The aim of this website was to show the main products of the brand in the most user-friendly way possible. It is a project that to this day has not been finalized and there are still some details to be finished. I used React, HTML, CSS and JavaScript for the development, it is a static and server-less website. ",mountedLink:"https://kremess.netlify.app",type:2},{name:"Calc It",repoLink:"https://github.com/PySanti/calc-it.git",videoId:"calcIt",wil:"I developed this project shortly after i started learning React, it doesn't have the best implementation and use of React, and now i look at the code and realize how much i've learned since then. This is a calculator made with React, JavaScript, CSS and HTML.",type:1},{name:"Geome Man",repoLink:"https://github.com/PySanti/geome-man.git",videoId:"geomeMan",wil:"This was the first big project i did. The first one in which i invested a lot of time and went into a lot of detail. A project that took more than 8 months. I learned the influence of mathematics on the world of videogames and how complicated it is to develop this kind of projects. In spite of that, this project awakened in me a great passion for game development and graphics in general. It is a small game in which you control a character in another dimension. Made with Python and PyGame.",type:1},{name:"Mega Killer",repoLink:"https://github.com/PySanti/megakiller.git",videoId:"megaKiller",wil:"Before 'Geome man' I developed this little project with a quite similar format, but using MegaMan sprites and sound effects from the famous animated series. As you can see if you run the program, the physics are not the best. Made with PyGame and Python.",type:1},{name:"Sprite Tester",repoLink:"https://github.com/PySanti/SpriteTester.git",videoId:"spriteTester",wil:"In my time of developing simple video games using PyGame, i developed my own sprites for the animations using Paint, the windows program. I felt the need to program something to quickly test my sprites. For that i made this project, an easy, fast, flexible (and free) way to test my sprites. Made using PyGame and Python.",type:1},{name:"Weder",repoLink:"https://github.com/PySanti/wederapp.git",videoId:"Weder",wil:"Another of the first projects i developed to test my first knowledge of HTML, CSS and JavaScript, but this time to test the 'event loop' and the 'asynchronous programming' of JavaScript. A simple application to get weather data using a free api.",type:1},{name:"Bouncing Ball",repoLink:"https://github.com/PySanti/bouncing-ball.git",videoId:"bouncingBall",wil:"One of the first simple projects i developed to put my first PyGame knowledge into practice. My wish from the beginning was to mirror the behavior of real world physics within the program. It is a program of an infinitely bouncing ball. Developed with Python and PyGame.",type:0},{name:"Zombies JS",repoLink:"https://github.com/PySanti/zombies-js.git",videoId:"zombiesJs",wil:"Again, one of the first projects I developed to test my knowledge of JavaScript, HTML and CSS. This time, it's a project where you can generate little dots (zombies) that track the mouse and follow it.",type:0},{name:"Facebook clon",repoLink:"https://github.com/PySanti/InitialFacebookPageClon.git",videoId:"facebookClon",wil:"This small project was developed shortly after learning HTML and CSS. I tested myself by trying to clone the facebook homepage without seeing its code. It turned out pretty well. I remember i developed this project right after i started college.",type:0},{name:"Firefox clon",repoLink:"https://github.com/PySanti/InitialFirefoxPageClon.git",videoId:"firefoxClon",wil:"Like 'facebook clon', this was a project i developed shortly after learning HTML and CSS and the goal from the beginning was to develop a static and server-less web page that would clone the home page of the famous Firefox browser.",type:0},{name:"JS input",repoLink:"https://github.com/PySanti/JS-input.git",videoId:"jsInput",wil:"A simple but relatively complicated project, i was looking to put my JavaScript skills to the test again by making a decorated input. In addition to JavaScript, this project involved a large presence of CSS.",type:0},{name:"Pagina Figo",repoLink:"https://github.com/PySanti/LuisFigoPage.git",videoId:"figoPage",wil:"A simple HTML and CSS flat project, made again to put my incipient web development skills into practice. A biography about the historic player of Barcelona and Madrid, Luis Figo.",type:0},{name:"Hypno Rect",repoLink:"https://github.com/PySanti/moving-madafaka-rect.git",videoId:"hypnoRect",wil:"A simple PyGame project, i did it in a couple of hours, i developed it from a simple idea i came up with, bringing to life a pretty nice graphical effect. It's worth noting that, although it seems extremely simple, this project led me to develop a great taste for graphical effects.",type:0}];function b(){let e=Object(n.useRef)(null),t=Object(n.useRef)(null);const a=t=>{let[a]=t;a.isIntersecting&&!h("copyBtn")&&(p("copyBtn"),setTimeout(()=>{e.current.classList.add("copy-btn__ACTIVATED")},1e3))};return Object(n.useEffect)(()=>{if(e.current){new IntersectionObserver(a,{root:null,rootMargin:"0px",threshold:.1}).observe(e.current)}},[]),o.a.createElement("div",{ref:e,className:"copy-btn"},o.a.createElement("span",{className:"material-symbols-outlined copy-btn__img",onClick:()=>{!function(e){const t=document.createElement("input"),a=document.getElementsByTagName("body")[0];t.setAttribute("value",e),a.appendChild(t),t.select(),document.execCommand("copy"),a.removeChild(t)}(g),t.current.classList.add("success-msg__ACTIVATED")}},"content_copy"),o.a.createElement("span",{className:"success-msg",ref:t},"copied !"))}function v(){const[e,t]=g.split("@");let a=Object(n.useRef)();const i=e=>{let[t]=e;t.isIntersecting&&!h("contact")&&(p("contact"),(()=>{const e=[document.getElementsByClassName("contact-content__paraph__p1")[0],document.getElementsByClassName("contact-content__paraph__p2")[0]];setTimeout(()=>{e.forEach(e=>{e.classList.add("paraph_activated")})},500)})(),s("contact-content__title"))};return Object(n.useEffect)(()=>{if(a.current){new IntersectionObserver(i,{root:null,rootMargin:"0px",threshold:.1}).observe(a.current)}},[]),o.a.createElement("footer",{ref:a,className:"contact-content"},o.a.createElement("h2",{className:"contact-content__title title"}," Contact  ",o.a.createElement("span",{className:"contact-content__title__me title__selected-text "},"Me")," "),o.a.createElement("p",{className:"contact-content__paraph"},o.a.createElement("span",{className:"contact-content__paraph__p1 paraph-part"},e),"@",o.a.createElement("span",{className:"contact-content__paraph__p2 paraph-part"},t)),o.a.createElement(b,null))}var w=a(42),_=(a(33),a(34),a(41)),E=a(13),k=a(14);const j=new _.a({cloud:{cloudName:"dwcabo8hs"}});function I(e){let{name:t,videoId:a,repoLink:i,wil:r,mountedLink:s,type:c}=e,[l,m]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{l&&console.log(`Proyecto ${t} activado`)},[l]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"project-item",onClick:()=>m(!0)},o.a.createElement("h3",{className:"project-item__name"},t),o.a.createElement("h2",{className:"project-type"},Array.from({length:c+1}).map((e,t)=>o.a.createElement(k.a,{key:t})))),o.a.createElement("div",{className:l?"modal-container displayed":"modal-container"},o.a.createElement("div",{className:"project-display"},o.a.createElement("header",{className:"project-display-header"},o.a.createElement("h2",{className:"project-title"},t),o.a.createElement("span",{class:"material-symbols-outlined close-button",onClick:()=>m(!1)},"close")),o.a.createElement("div",{className:"content-container"},o.a.createElement("div",{className:"wil-container"},o.a.createElement("p",{className:"wil-description"},r," ")),o.a.createElement("div",{className:"video-container"},l&&o.a.createElement(E.a,{className:"project-item__video",cldVid:j.video(`portafolio/${a}`).quality("auto"),autoPlay:l}),o.a.createElement("ul",{className:"redirect-container"},o.a.createElement("li",{className:"wil-repo-link"},"Visit the repository ",o.a.createElement("a",{href:i,target:"__blank"},"here"),"!"),s&&o.a.createElement("li",{className:"wil-mounted-link"},"Visit the page ",o.a.createElement("a",{href:s,target:"__blank"},"here"),"!")))))))}function N(e){let t=Object(n.useRef)();const a=e=>{let[t]=e;t.isIntersecting&&!h("projects")&&(p("projects"),s("projects-container__title"),(e=>{for(let t=0;t<e.length;t++)setTimeout(()=>{e[t].classList.add("project-item__ACTIVATED"),setTimeout(()=>{e[t].children[1].classList.add("project-type__ACTIVATED")},200)},100*t)})(document.getElementsByClassName("project-item")))};return Object(n.useEffect)(()=>{if(t.current){new IntersectionObserver(a,{root:null,rootMargin:"0px",threshold:.1}).observe(t.current)}},[]),o.a.createElement("section",{ref:t,className:"projects-container"},o.a.createElement("h2",{className:"projects-container__title title"},"My ",o.a.createElement("span",{className:"projects-container__title__made title__selected-text"}," Projects ")),o.a.createElement("div",{className:"projects-container__projects_list"},y.map(e=>o.a.createElement(I,{key:Object(w.a)(),name:e.name,videoId:e.videoId,repoLink:e.repoLink,wil:e.wil,mountedLink:e.mountedLink,type:e.type}))))}a(35);function S(e){let{tecnoName:t}=e;return o.a.createElement("li",{className:"tecnos-container__list__item"},o.a.createElement("span",{className:"tecno_check"},"\u2713"),o.a.createElement("span",{className:"tecno_name"},t))}function T(e){let t=Object(n.useRef)();const a=e=>{let[t]=e;t.isIntersecting&&!h("tecnos")&&(p("tecnos"),(e=>{for(let t=0;t<e.length;t++)setTimeout(()=>{e[t].classList.add("tecno_activated"),setTimeout(()=>{e[t].children[0].classList.add("tecno_check__activated")},150*t)},200*t)})(document.getElementsByClassName("tecnos-container__list")[0].children),s("tecnos-container__title"))};return Object(n.useEffect)(()=>{if(t.current){new IntersectionObserver(a,{root:null,rootMargin:"0px",threshold:.1}).observe(t.current)}},[]),o.a.createElement("section",{ref:t,className:"tecnos-container"},o.a.createElement("h2",{className:"tecnos-container__title title"}," My",o.a.createElement("span",{className:"tecnos-container__title__dom title__selected-text"}," Skills")),o.a.createElement("ul",{className:"tecnos-container__list"},f.map(e=>o.a.createElement(S,{key:Object(w.a)(),tecnoName:e}))))}a(36),a(37);function L(e){let{name:t,pageId:a}=e,[n,i]=d(e=>[e.pageNumber,e.setPageNumber]);return o.a.createElement("div",{className:n==a?"map-item map-item__SELECTED":"map-item",onClick:e=>{document.getElementsByClassName("main-container")[0].style.left=`${-100*a}vw`,i(a)}},t)}function P(){let e=-1,t=Object(n.useRef)();return Object(n.useEffect)(()=>{setTimeout(()=>{t.current.classList.add("map-container__ACTIVATED")},500)},[]),o.a.createElement("div",{className:"map-bigger-container"},o.a.createElement("div",{ref:t,className:"map-container"},["Home","About","Skills","Projects","Contact"].map(t=>(e++,o.a.createElement(L,{key:Object(w.a)(),name:t,pageId:e})))))}function C(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-container"},o.a.createElement(c,null),o.a.createElement(u,null),o.a.createElement(T,null),o.a.createElement(N,null),o.a.createElement(v,null)),o.a.createElement(P,null))}r.a.createRoot(document.getElementById("root")).render(o.a.createElement(C,null))}],[[15,1,2]]]);
//# sourceMappingURL=main.7c67c301.chunk.js.map