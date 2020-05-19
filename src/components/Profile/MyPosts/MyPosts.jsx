import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/Profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let newPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}
                                  placeholder='Enter your post'
                                  value={props.newPostText}
                                  onChange={newPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Send</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
};

export default MyPosts;
