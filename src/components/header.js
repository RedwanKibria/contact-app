import React from "react";
import user from "../images/Zenitsu.jpg";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
