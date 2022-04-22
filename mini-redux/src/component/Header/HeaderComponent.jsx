import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.Style.css";
const Header = () => {
    return (
        <div  className='naside d-flex justify-content-center align-items-center'>
            <ul className='d-flex flex-row justify-content-evenly pt-1'>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/Create">Create</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                
            </ul>
            
        </div>
    );
};

export default Header;