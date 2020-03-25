import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='wide content'/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;