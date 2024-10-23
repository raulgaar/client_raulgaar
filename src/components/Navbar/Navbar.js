import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, logout } = useContext(AuthContext);

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
                                    <li><a className="dropdown-item" href="#">Task List</a></li>
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
            {/* Modal */}
            <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fontlogin" id="authModalLabel">Log in / Sign up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body modalloginregister">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">Register</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <Login />
                                </div>
                                <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;