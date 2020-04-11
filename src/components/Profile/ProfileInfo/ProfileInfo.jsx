import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
                     alt='wide content'/>
            </div>
            <div>
                avatar + description
            </div>
        </div>
    )
};

export default ProfileInfo;
