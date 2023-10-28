import React from 'react';
import style from './header.module.css';

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.logo}></div>

            <div className={style.contact}>
                <p>+7 (999) 888-77-66</p>
                <p>magazin@mail.ru</p>
            </div>
        </div>
    );
};

export default Header;