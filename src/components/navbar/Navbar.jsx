import React, { useState, useEffect, useContext } from 'react';
import logo from '../../assets/logo.png';

//material ui imports
import Button from '@mui/material/Button';

//Modals imports
import Modal from '../modal/Modal';
import UserOrders from '../userOrdersModal/UserOrders';
import PerfilUsuarioModal from '../PerfilUsuarioModal/PerfilUsuarioModal';

//icons imports
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import './navbar.css';

//
import UserMenu from '../userMenu/UserMenu';

import { auth } from '../../firebase/firebaseConfig';
import { onAuthStateChanged, signOut } from "firebase/auth";

import UserContext from '../../context/user/UserContext';

const Menu = () => (
    <>
        <p><a href="#home">Inicio</a></p>
        <p><a href="#aboutUs">Sobre nosotros</a></p>
        <p><a href="#contact">Contacto</a></p>
    </>
)

const Navbar = () => {
    const currentUser = auth.currentUser;

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [toggleMenu, setToggleMenu] = useState(false);

    const { login, userFrom } = useContext(UserContext);

    useEffect(() => {
        console.log("Cambio el estado de user");
        setUser(currentUser);
        login(user);

    },[user]);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            setLoading(false);
            // ...
        } else {
            // User is signed out
            console.log("Usuario desconectado =>");
            setLoading(false);
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
                        Bienvenido/a, <UserMenu user={userFrom} PerfilUsuarioModal={PerfilUsuarioModal} logOut={logOut}/>
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