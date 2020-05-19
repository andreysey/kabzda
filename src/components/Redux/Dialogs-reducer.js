const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yo!'},
        {id: 3, message: 'Hello!'},
        {id: 4, message: 'Yes'},
        {id: 5, message: 'No'}
    ],
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Dimich'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Tibit'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});
