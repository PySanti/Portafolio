import React from "react";
import "./ContactStyles.css"


export function Contact({email}){
    return (
        <footer className="contact-content">
            <h3 className="contact-content__title">Contact me</h3>
            <p className="contact-content__paraph">{email}</p>
        </footer>
    )
}