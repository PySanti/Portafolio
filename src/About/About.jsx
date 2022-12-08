import React from "react";
import "./AboutStyles.css"

export function About(props){
    return (
    <section className="about-container">
        <h2 className="about-container__title">About <span className="about-container__title__comp"> Me </span></h2>
        <p className="about-container__paraph">
            My name is Santiago, I am 17 years old and although I am a first semester 
            student of computer engineering at the 
            <a  href="https://elucabista.com/2022/06/09/qs-world-university-ranking-2023-la-ucab-sigue-siendo-la-mejor-universidad-privada-venezuela/"className="about-container__paraph__u selected-text"> Universidad Catolica Andres Bello </a>, 
            I have been learning programming for more than two years in a self-taught way through 
            documentations and books, making personal projects. I am a passionate lover of science, mainly mathematics, geometry and physics, as well as a lover of algorithms and computer science, I love to create new things, things never seen before, from my knowledge and ingenuity. My favorite branch of computer engineering is game development, basically because besides being the most complicated by far, it allows me to combine my computer knowledge with the laws of physics. I have very deep knowledge in very specific technologies and I am able to realize any project in the most optimal, aesthetic and fast way possible.
        </p>
    </section>
)
}