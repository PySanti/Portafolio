import React from "react";
import "./AboutStyles.css"

export function About(props){
    return (
    <section className="about-container">
        <h2 className="about-container__title title">About <span className="about-container__title__comp title__selected-text"> Me </span></h2>
        <p className="about-container__paraph">
            My name is Santiago, I am 17 years old and although I am a first semester 
            student of computer engineering at the 
            <a  href="https://elucabista.com/2022/06/09/qs-world-university-ranking-2023-la-ucab-sigue-siendo-la-mejor-universidad-privada-venezuela/" target="__blank"  className="about-container__paraph__u selected-text">Universidad Catolica Andres Bello</a>,
            I have more than two years of programming experience, gaining knowledge independently.  
            I have very deep knowledge in very specific technologies and I am able to realize any project in the most optimal.
            I have an intermediate knowledge of English and I am able to communicate perfectly in English. 
        </p>
    </section>
)
}