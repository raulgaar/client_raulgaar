import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        active: true,
    });

    const [message, setMessage] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const navigate = useNavigate();
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the data to the backend
            const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/register`, formData);
            setMessage('Registration successful!');
            //Redirect to login
            navigate('/login');
            console.log(response);
        } catch (error) {
            setMessage('Error: ' + error.response.data.message);
            Swal.fire({
                title: "Register failed!",
                text: error.response.data.message,
                icon: "error"
            });
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input
                    type="text"
                    name="name"
          className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    required
                />
            </div>
            <div className="form-group mb-3">
                <input
                    type="text"
                    name="username"
          className="form-control"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='Username'
                    required
                />
            </div>
            <div className="form-group mb-3">
                <input
                    type="email"
                    name="email"
          className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    required
                />
            </div>
            <div className="form-group mb-3">
                <input
                    type="password"
                    name="password"
          className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                    required
                />
            </div>
            <div className="form-group mb-3">
                <input
                    type="password"
                    name="confirmpassword"
          className="form-control"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    placeholder='Confirm password'
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary w-100 fontlogin">Register</button>
        </form>
    );
};

export default Register;