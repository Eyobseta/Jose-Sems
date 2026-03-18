import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">Student Dashboard</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/grades">Grades</Link>
      </div>
      <div className="nav-user">
        {user && (
          <>
            <img src={user.photoURL || '/default-avatar.png'} alt="avatar" className="avatar" />
            <span>{user.name}</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}