let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'Im fine!', likesCount: 15}
        ],

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
};

export let addPost = (postMessage) => {

    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 30
    };

    state.profilePage.posts.push(newPost);
};

export default state;