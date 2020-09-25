import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../images/logo.png";
import "../Header/Header.css"
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Review</Link>
                <Link to="/menege">Menege</Link>
                <button onClick={() => setLoggedInUser({})}>Signout</button>
            </nav>
        </div>
    );
};

export default Header;