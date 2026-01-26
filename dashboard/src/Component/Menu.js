import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000?action=logout";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>

            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>

          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>

          </li>
          <li>

            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>

            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>

          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer", position: "relative" }}>
          <div className="avatar">{user ? user.username[0].toUpperCase() : "ZU"}</div>
          <p className="username">{user ? user.username : "USERID"}</p>
          {isProfileDropdownOpen && (
            <div style={{ position: "absolute", top: "100%", background: "white", padding: "10px", border: "1px solid #eee", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", zIndex: 100 }}>
              <button onClick={logout} style={{ border: "none", background: "none", color: "red", fontWeight: "bold", cursor: "pointer" }}>Logout</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;
