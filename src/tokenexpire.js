import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const useTokenExpiration = () => {
  const navigate = useNavigate();

  const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token); // Decodificar el token
      const currentTime = Date.now() / 1000; // Convertir a segundos

      if (decoded.exp < currentTime) {
        // Si el token ha expirado
        console.log('El token ha expirado, cerrando sesión...');
        localStorage.removeItem('token'); // Eliminar el token del localStorage
        navigate('/login'); // Redirigir al login
      }
    }
  };

  return { checkTokenExpiration };
};

export default useTokenExpiration;
