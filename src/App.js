import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './components/ToDoList/ToDoList';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
