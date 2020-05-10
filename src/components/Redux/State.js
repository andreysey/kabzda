let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'Im fine!', likesCount: 15}
            ],
            newPostText: 'Tap here'
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
            ]
        }
    },
    getState() {

        return this._state;
    },
    _callSubscriber() {

        console.log('State changed')
    },
    addPost() {

        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 30
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {

        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;
