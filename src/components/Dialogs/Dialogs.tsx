import React, {ChangeEvent, useState} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/state";

type dialogsStatePropsType = {
    dialogsState: DialogsPageType
}

export const Dialogs: React.FC<dialogsStatePropsType> = (props) => {
    const dialogs = props.dialogsState.dialogs.map((dialog) => {
        return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>
        )
    })
    const messages = props.dialogsState.messages.map((message) => {
        return (
            <Message key={message.id}
                     id={message.id}
                     message={message.message}
                     userId={message.userId}
                     avatar={message.avatar}/>
        )
    })
    let [message, setMessage] = useState('')
    const addMessageHandler = () => {
        console.log(message)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>{dialogs}</div>
            <div className={style.messages}>{messages}</div>
            <div>
                <textarea value={message} onChange={onChangeHandler}></textarea>
                <button onClick={addMessageHandler}>add Message</button>
            </div>

        </div>
    );
};

