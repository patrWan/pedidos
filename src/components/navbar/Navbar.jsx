import React, { useState } from 'react';
import logo from '../../assets/logo.png';

//material ui imports
import Button from '@mui/material/Button';
//icons imports
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home">Inicio</a></p>
        <p><a href="#aboutUs">Sobre nosotros</a></p>
        <p><a href="#contact">Contacto</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="navbar-sign">
                <p>Iniciar Sesión</p>
                <Button variant="contained">Registrate</Button>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <MdClose color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <MdMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu/>
                            <div className="navbar-menu_container-links-sign">
                                <p>Iniciar Sesión</p>
                                <Button variant="contained">Registrate</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;