import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useTokenExpiration from '../../tokenexpire'
import AuthModal from '../AuthModal/AuthModal';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, logout } = useContext(AuthContext);
    const { checkTokenExpiration } = useTokenExpiration();

    useEffect(() => {
        // Verificar si el token ha expirado cada vez que se carga el Navbar
        checkTokenExpiration();

        // Opcional: Verificar el token en intervalos regulares
        const interval = setInterval(() => {
            checkTokenExpiration();
        }, 60000);

        return () => clearInterval(interval);
    }, [checkTokenExpiration]);

    // Eliminar el token del localStorage
    const handleLogout = () => {
        logout();
        // Redirigir al usuario a la página de login
        navigate('/');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg colornavbar ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">raulgaar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutme">About me</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Apps
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/todolist">Task List</Link></li>
                                    {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
                                    {/* <li><hr className="dropdown-divider"/></li> */}
                                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                            {!token ? (
                                <>

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">
                                        Log in / Sign up
                                    </button>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={handleLogout}>
                                        Log out
                                    </button>
                                    
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
            <AuthModal />
        </>
    );
};

export default Navbar;