import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">Quintela</div>
            <nav>
                <ul>
                    <li>О компании</li>
                    <li>Деятельность</li>
                    <li>Персонал</li>
                    <li>Клиенты</li>
                    <li>Акционеру и инвестору</li>
                    <li>Пресс-центр</li>
                    <li>Торги</li>
                    <li>Контакты</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
