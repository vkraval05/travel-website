import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { logout } from '../../authUser/userSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const user = useSelector((state) => state.user.user);
    const loguser = useSelector((state) => state.user.loguser);

    const dispatch = useDispatch();
    const [login, setLogin] = useState('false');

    useEffect(() => {
        if (loguser) {
            if (user.signIn === 'true' && loguser.logIn === 'true') {
                setLogin('true')
            } else {
                setLogin('false')
            }
        }
    }, [user, loguser])

    const logout1 = () => {
        dispatch(logout({
            logIn: 'false'
        }))
        alert("Logout Successfully")

    }

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handelClick = () => { setClick(!click) };
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, []);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="navbar-logo" >
                        {closeMobileMenu}
                        TRVL<i className="fa-brands fa-typo3"></i>
                    </NavLink>
                    <div className="menu-icon" onClick={handelClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' className="nav-links-mobile" onClick={closeMobileMenu}>
                                LOGIN NOW
                            </NavLink>
                        </li>
                    </ul>
                    {button && login === 'true' ? <Button to={'login'} onClick={logout1} buttonStyle='btn--outline' >LOGOUT</Button> : <Button buttonStyle='btn--outline' to={'login'}>LOGIN NOW</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
