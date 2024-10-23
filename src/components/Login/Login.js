import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Login.css';
import { AuthContext } from '../AuthContext';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';

const Login = () => {
  const [formData, setFormData] = useState({
    emailUsername: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/login`, formData);
      setMessage('Login successful!');
      // You can store the token or redirect the user here
      login(response.data.token); // Store JWT token
      const modalElement = document.getElementById('authModal');
      const modalInstance = Modal.getInstance(modalElement);
      modalInstance.hide();
      navigate('/')
    } catch (error) {
      // setMessage('Error: ' + (error.response ? error.response.data.message : 'Login failed'));
      Swal.fire({
        title: "Login failed!",
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
          name="emailUsername"
          className="form-control"
          value={formData.emailUsername}
          onChange={handleChange}
          placeholder="Username or Email"
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
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 fontlogin">Login</button>
    </form>
  );
};

export default Login;