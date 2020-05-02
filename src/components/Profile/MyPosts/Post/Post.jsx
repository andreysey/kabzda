import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i7.pngguru.com/preview/721/745/248/computer-icons-ninja-icon-design-ninja.jpg'
                 alt='avatar'/>
            {props.message}
            <div>
                <span>Like!</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post;
