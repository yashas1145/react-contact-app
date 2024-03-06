import React from "react";
import style from "../style.module.css";

function Contact (props) {
    return <div className={style.contactCard}>
        <div className={style.top}>
            <h3>{props.contactName}</h3>
            <img src={props.contactImgUrl} alt=""/>
        </div>
        <div className={style.bottom}>
            <p>Contact: {props.contactNumber}</p>
            <p>Email: {props.contactEmail}</p>
        </div>
    </div>
}

export default Contact;