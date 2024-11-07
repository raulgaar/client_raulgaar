import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = () => {
    
  return (
    <div className="home-page">
      <header className="intro">
        <h1>Hey, I am Raul Garcia</h1>
        <p>Software Developer</p>
      </header>
      
      <section className="about-me">
        <h2>About me</h2>
        <p>My name is Raul Garcia and I am a Software Developer with knowledge in PHP and laravel and currently exploring JavaScript, React, Node.js, and more. 
        I am interested in learning more about all aspects in coding to create useful solutions.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>To Do List</h3>
            <p>To do list for simple organization.</p>
            <Link to="/todolist" className="btnDash">See project</Link>
          </div>
          {/* Puedes agregar más proyectos aquí */}
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>PHP</li>
          <li>Laravel</li>
          <li>MySQL</li>
          <li>SQL Server</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </section>

      <footer className="contact">
        <h2>Contact</h2>
        <p>Have an idea or project in mind? ¡Contact me!</p>
        <a href="https://www.linkedin.com/in/raulgaar/" className="btnDash"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/raulgaar" className="btnDash"><i class="fa-brands fa-github-alt"></i> GitHub</a>
      </footer>
    </div>
  );
};

export default Dashboard;