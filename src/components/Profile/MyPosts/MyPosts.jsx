import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea>some text</textarea>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likesCount='3'/>
                    <Post message='Im fine!' likesCount='12'/>
                </div>
            </div>
        </div>
    )
};

export default MyPosts;
