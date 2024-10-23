import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto que manejará la autenticación
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Verificar si el token está en el localStorage al cargar la aplicación
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (token) => {
    // Guardar el token en localStorage y actualizar el estado
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    // Eliminar el token del localStorage y actualizar el estado
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
