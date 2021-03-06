import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={s.header}>
        <table style={{width:'100%'}}>
            <th>
                <div>
                    My Jira
                </div>
            </th>
            <th  style={{textAlign: 'right'}}>
                <div>
                    <a href="/login">Login</a>|<a href="/register">Register</a>
                </div>
            </th>
        </table>

    </header>
}

export default Header;