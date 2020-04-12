import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'Im fine!', likesCount: 15}
    ];

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea>some text</textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                    <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                </div>
            </div>
        </div>
    )
};

export default MyPosts;
