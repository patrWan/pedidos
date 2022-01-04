import React, { useState, useContext } from 'react';
import logo from '../../assets/logo.png';

//material ui imports
import Button from '@mui/material/Button';
import Modal from '../modal/Modal';
//icons imports
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import './navbar.css';

import { auth } from '../../firebase/firebaseConfig';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';

const Menu = () => (
    <>
        <p><a href="#home">Inicio</a></p>
        <p><a href="#aboutUs">Sobre nosotros</a></p>
        <p><a href="#contact">Contacto</a></p>
    </>
)

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {

    },[])

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log("Usuario conectado =>", uid);
            setUser(user);
            setLoading(false);
            // ...
        } else {
            // User is signed out
            console.log("Usuario desconectado =>");
        }
    });


    const logOut = () => {
        signOut(auth).then(() => {
            alert('Sesión Cerrada exitosamente!');
            setUser(null);
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                {
                loading ? <p>Cargado datos ...</p> : 
                user ?
                    <>
                        <p>{user.email}</p>
                        <Button variant="contained" onClick={logOut}>Cerrar Sesión</Button>
                    </>

                    :

                    <>
                        <p>Registrate</p>
                        <Modal />
                    </>

                }

            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <MdClose color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <MdMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu />
                            <div className="navbar-menu_container-links-sign">
                                <p>Registrate</p>
                                <Modal />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;