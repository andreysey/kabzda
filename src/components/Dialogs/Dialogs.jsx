import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Maksim
                </div>
                <div className={s.dialog}>
                    Dimich
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Tibit
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    Im fine
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
