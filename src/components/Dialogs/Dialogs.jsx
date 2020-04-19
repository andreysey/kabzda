import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
};

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Dimich'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Tibit'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yo!'},
        {id: 3, message: 'Hello!'},
        {id: 4, message: 'Yes'},
        {id: 5, message: 'No'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItems name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItems name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItems name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
};

export default Dialogs;
