import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./auth/AuthContext";
import "./style/menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="kite-logo.svg"
        alt="Kite"
        style={{ width: "50px", marginLeft: "7rem" }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link to="/dashboard" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/apps" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>

          
          <li className="profile-wrapper">
            <div
              className="profile"
              onClick={() =>
                setIsProfileDropdownOpen((prev) => !prev)
              }
            >
              <div className="avatar">
                {user?.userName?.[0]?.toUpperCase() || "U"}
              </div>
              <p className="username">
                {user?.userName || "User"}
              </p>
            </div>

            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
