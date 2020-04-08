import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png'
                 alt='avatar'/>
            {props.message}
            <div>
                <span>Like!</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post;
