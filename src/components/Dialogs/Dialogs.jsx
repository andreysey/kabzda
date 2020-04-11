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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name='Andrey' id='1'/>
                <DialogItems name='Maksim' id='2'/>
                <DialogItems name='Dimich' id='3'/>
                <DialogItems name='Lena' id='4'/>
                <DialogItems name='Tibit' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='Yo!'/>
                <Message message='Hellou!'/>
            </div>
        </div>
    )
};

export default Dialogs;
