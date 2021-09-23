import { Link } from "react-router-dom";
import { useState } from "react";
import { React } from 'react';

export const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <nav>
      <ul>
        <li>
          <Link to="/product-manager">Product Manager</Link>
        </li>
        <li className="dropdown">
          <button
            id="infoUser"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hello, Admin
          </button>
          <ul className="dropdown-menu" aria-labelledby="infoUser">
            <li><Link to="/user"><i className="fas fa-user"></i> Info User</Link></li>
            <li><i className="fas fa-sign-out-alt"></i> Log out</li>
          </ul>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul>
        <li>
          <Link to="/log-in" style={{marginRight: "4px"}}>Login</Link>/
          <Link to="/register" style={{marginLeft: "4px"}}>Register</Link>
        </li>
      </ul>
    </nav>
  );
};
