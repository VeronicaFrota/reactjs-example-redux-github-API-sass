import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div className="menu">
        <div className="menuLogo">
            <a href="#">Logo</a>
        </div>
        <nav className="menuNav">
            <ul>
                <NavLink to="/" activeStyle={{ color:'#ff0080' }} className="menuNavLink">
                    <li>API GitHub</li>
                </NavLink>
                <NavLink to="/exemple-redux" activeStyle={{ color:'#ff0080' }} className="menuNavLink">
                    <li>Redux</li>
                </NavLink>
            </ul>
        </nav>
    </div>
)

export default Header;
