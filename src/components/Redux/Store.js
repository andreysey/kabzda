import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'Im fine!', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {

        console.log('State changed')
    },

    getState() {

        return this._state;
    },
    subscribe(observer) {

        this._callSubscriber = observer;
    },

    dispatch(action) { // {type:'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;
