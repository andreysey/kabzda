import React from "react";
import s from './Dialogs.module.css'

import {DialogItems} from "./DialogItems/DialogItems";
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/Dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageBody;

    let addMessage = () => {
        props.dispatch(sendMessageCreator())
    };

    let newMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                <textarea placeholder='Enter your message'
                          value={newMessageBody}
                          onChange={newMessageChange}>some message</textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;
