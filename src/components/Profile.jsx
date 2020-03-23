import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='content'>
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
                <div>
                    <div>
                        Post1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;