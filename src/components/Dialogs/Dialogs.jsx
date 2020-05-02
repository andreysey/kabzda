import React from "react";
import s from './Dialogs.module.css'

import {DialogItems} from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}>some message</textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;
