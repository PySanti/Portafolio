import React from "react";
import "./ContactStyles.css"
import { CopyBtn } from "../../Others/CopyBtn/CopyBtn";


export function Contact(){
    return (
        <footer className="contact-content">
            <h2 className="contact-content__title title"> Contact  <span className="contact-content__title__me title__selected-text ">Me</span> </h2>
            <p className="contact-content__paraph">
                <span className="contact-content__paraph__p1 paraph-part">santiagodeandrade4</span>
                @
                <span className="contact-content__paraph__p2 paraph-part">gmail.com</span>
            </p>
            <CopyBtn/>
        </footer>
    )
}