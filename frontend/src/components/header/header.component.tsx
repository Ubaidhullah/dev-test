import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.component.css';
import '../../common/styles'

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/book">Book A Trip</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;