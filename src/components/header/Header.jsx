import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setToken, successToast } =
    useContext(Context);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setToken('');
    setIsLoggedIn(false);
    successToast('Successfully signed out');
    navigate('/');
  };

  return (
    <header>
      <div className="logo-div">
        <h1>
          <span>M</span>rova<span>B</span>iz<span>H</span>ub
        </h1>
        {isLoggedIn && <p>Admin Panel</p>}
      </div>
      {isLoggedIn ? (
        <nav className="nav-links">
          <Link to="/add-business">Add Business</Link>
          <Link to="/businesses-list">Businesses List</Link>
          <button className="logout-btn" onClick={handleLogOut}>
            Log Out
          </button>
        </nav>
      ) : (
        <p>Admin Panel</p>
      )}
    </header>
  );
};
export default Header;
