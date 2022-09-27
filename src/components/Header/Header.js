import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <div className="navbar w-10/12 mx-auto">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>About us</a></li>
                        <li><a>Feature</a></li>
                        <li><a>upcoming</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;