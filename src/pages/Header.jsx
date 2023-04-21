import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
import { useAuthCtx } from "../auth/AuthProvider";
import Logout from "../auth/Logout";

function Header() {
  const { isLoggedIn } = useAuthCtx();
  // const isLoggedIn=false
  return (
    <header>
      <div className="container">
        <Link to={"/"} className="logos">
          <img src="./public/mad-frog.webp" alt="logo" style={{ maxHeight: '36px' }} />
        </Link>

        <nav>
          {isLoggedIn && (
            <>
              <NavLink className="" to={"/shop"}>
                Shops
              </NavLink>
              <NavLink className="" to={"/add"}>
              Add-shop
              </NavLink>

              {/* <NavLink
                className=""
                to={'/register'}
              >
                Profile
              </NavLink> */}
              <NavLink className="" to={"/login"}>
                <Logout />
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink className="" to={"/register"}>
                Register
              </NavLink>
              <NavLink className="" to={"/login"}>
                Login
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
