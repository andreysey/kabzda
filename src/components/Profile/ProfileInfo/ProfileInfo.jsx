import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            {/*<div>
                <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
                     alt='wide content'/>
            </div>*/}
            <div>
                <img src={props.profile.photos.large} alt='ava'/>
                <ProfileStatus status={"Hello!"}/>
            </div>
        </div>
    )
};

export default ProfileInfo;
