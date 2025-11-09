import React from 'react'
// import { NavLink } from 'react-router'
import { NavLink, useLocation } from 'react-router';

import './Header.css'
import About_Team from './About_Team'


export default function Header() {

    const [navOpened, setNavOpened] = React.useState(false);
    const location = useLocation();

    function navToggler() {
        setNavOpened(!navOpened);
    }

    // function navPopUp() {
    //     setNavOpened(!navOpened);
    //     return (
    //         <div className='navOpen'>
    //             <NavLink>Services</NavLink>
    //             <NavLink>Their Stories</NavLink>
    //             <NavLink>Our Story</NavLink>
    //             <NavLink>Varnan</NavLink>
    //             <NavLink>Let's Talk</NavLink>
    //         </div>
    //     )
    // }
    return (
        <div className='navbar'>
            <NavLink to='/'>
                <div className='logo-container'>
                    <img src="/logo.png" className={location.pathname !== '/' ? 'logo-nav' : 'logo-nav-off'} alt="" />
                </div>
            </NavLink>


            <div className={`nav-container ${navOpened ? 'move' : ''}`}>
                <img src="/nav.png" alt="" onClick={navToggler} className={`toggler ${navOpened ? 'on' : 'off'}`} />
                <div className={`navOpen ${navOpened ? 'open' : ''}`}>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/portfolio'>Their Stories</NavLink>
                    <NavLink to='/about_team'>Our Story</NavLink>
                    <NavLink to='/about_us'>Varnan</NavLink>
                    <NavLink to='/contact'>
                        <div className='contact'>
                            <NavLink to='/contact'>
                                Let's Talk
                            </NavLink>
                            <img src="/mail.svg" alt="" />
                        </div>
                    </NavLink>
                </div>



                <img src='Open.svg' className={`toggler2 ${!navOpened ? 'off' : 'on'}`} alt="" onClick={navToggler} />
            </div>
        </div>
    )
}
