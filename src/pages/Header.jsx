import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthCtx } from "../auth/AuthProvider";
import Logout from "../auth/Logout";
import "./style.scss";

function Header() {
  const { isLoggedIn } = useAuthCtx();
  // const isLoggedIn=false
  return (
    <header>
      <div className="container nav-link">
        <Link to={"/"} className="logos">
          <img src="/mad-frog.webp" alt="logo" className="logo-top" style={{ maxHeight: "38px" }} />
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
