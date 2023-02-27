import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const deleteConactHandler = (id) => {
        props.getContactId(id);
    };
