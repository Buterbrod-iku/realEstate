import React from 'react';
import style from './menu.module.css';

const Menu = () => {
    return (
        <div className={style.main}>
            <p>Главная</p>
            <p>Дома</p>
            <p>Контакты</p>
            <p>О нас</p>
        </div>
    );
};

export default Menu;