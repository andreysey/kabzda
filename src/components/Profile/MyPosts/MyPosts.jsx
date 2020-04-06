import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My posts
                <div>
                    <textarea>some text</textarea>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?'/>
                    <Post message='Im fine!'/>
                </div>
            </div>
        </div>
    )
};

export default MyPosts;