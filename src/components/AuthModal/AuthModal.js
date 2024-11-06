// AuthModal.js
import React, { useState, useEffect } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './AuthModal.css';

const AuthModal = () => {
    const [isLogin, setIsLogin] = useState(true);
  
    useEffect(() => {
      const modalContent = document.querySelector('.custom-modal-content');
      const shapeContainer = document.createElement("div");
      shapeContainer.classList.add("shape-container");
      
      // Añadir el contenedor de formas dentro del contenido del modal
      modalContent.appendChild(shapeContainer);
  
      // Función para crear una forma aleatoria dentro del modal
      const createShape = () => {
        const shape = document.createElement("div");
        const shapeType = ["circle", "square", "triangle"];
        const selectedShape = shapeType[Math.floor(Math.random() * shapeType.length)];
  
        shape.classList.add("shape", selectedShape);
  
        // Generar posiciones aleatorias dentro del modal
        const containerWidth = shapeContainer.offsetWidth;
        const containerHeight = shapeContainer.offsetHeight;
        shape.style.left = `${Math.random() * containerWidth}px`;
        shape.style.top = `${Math.random() * containerHeight}px`;
  
        shapeContainer.appendChild(shape);
  
        // Desvanecimiento gradual antes de eliminar la forma
        setTimeout(() => {
          shape.style.opacity = '0';
        }, 2000); // Comienza a desvanecerse después de 2 segundos
  
        setTimeout(() => {
          shape.remove();
        }, 4000); // Se elimina completamente después de 4 segundos
      };
  
      // Crear formas aleatorias cada segundo
      const shapeInterval = setInterval(createShape, 1000);
  
      // Función para mover las formas con un movimiento suave
      const handleMouseMove = (e) => {
        const shapes = document.querySelectorAll(".shape");
  
        shapes.forEach((shape) => {
          const shapeRect = shape.getBoundingClientRect();
          const distanceX = e.clientX - (shapeRect.left + shapeRect.width / 2);
          const distanceY = e.clientY - (shapeRect.top + shapeRect.height / 2);
          const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  
          if (distance < 100) {
            const moveX = (distanceX > 0 ? -1 : 1) * 30; // Ajuste suave
            const moveY = (distanceY > 0 ? -1 : 1) * 30;
            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
          } else {
            shape.style.transform = `translate(0, 0)`;
          }
        });
      };
  
      modalContent.addEventListener("mousemove", handleMouseMove);
  
      // Cleanup al desmontar
      return () => {
        clearInterval(shapeInterval);
        modalContent.removeEventListener("mousemove", handleMouseMove);
        shapeContainer.remove();
      };
    }, []);
  
    return (
      <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="authModalLabel">
                {isLogin ? "Log In" : "Register"}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body form-background">
              {isLogin ? <Login /> : <Register />}
              <p className="text-center mt-3 auth-toggle">
                {isLogin ? (
                  <span>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      onClick={() => setIsLogin(false)}
                    >
                      Register
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      onClick={() => setIsLogin(true)}
                    >
                      Log In
                    </button>
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AuthModal;