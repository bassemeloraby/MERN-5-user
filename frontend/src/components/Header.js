import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { Fragment } from 'react';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  
  return (

    <header className="header">
      <div className="logo">
  {/*<Link to="/login">GoalSetter</Link>*/}  
        <span>GoalSetter</span>
      </div>
      <ul>
      {user ? (
        <li>
          <button className='btn' onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </li>
      ) : (<Fragment><li>
        <Link to="/login">
          <FaSignInAlt />
          Login
        </Link>
      </li>
      <li>
        <Link to="/register">
          <FaUser />
          Register
        </Link>
      </li></Fragment>)}
        
      </ul>
    </header>
  );
}

export default Header;
