import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
// import { useAuthCtx } from '../auth/AuthProvider';
// import Logout from '../auth/Logout';

function Header() {
//   const { isLoggedIn } = useAuthCtx();
const isLoggedIn=false
  return (
    <header>
      <div className="container">
        <Link to={'/'} className="">
          <h2>Logo</h2>
        </Link>
        <nav>
          <NavLink className="" to={'/register'}>
            Register
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink
                className=""
                to={'/shop'}
              >
                Posts
              </NavLink>
              <NavLink
                className=""
                to={'/add'}
              >
                Create Post
              </NavLink>
              <NavLink
                className=""
                to={'/register'}
              >
                Profile
              </NavLink>
              <NavLink
                className=""
                to={'/login'}
              >
                <Logout />
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <NavLink
              className=""
              to={'/login'}
            >
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

