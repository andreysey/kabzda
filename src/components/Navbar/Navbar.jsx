import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="https://github.com">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="https://github.com">Messages</a>
            </div>
            <div className={s.item}>
                <a href="https://github.com">News</a>
            </div>
            <div className={s.item}>
                <a href="https://github.com">Music</a>
            </div>
            <div className={s.item}>
                <a href="https://github.com">Settings</a>
            </div>
        </nav>
    )
};

export default Navbar;