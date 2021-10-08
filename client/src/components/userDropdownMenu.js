import React, { useRef } from "react";
import { OutsideClick } from "./outsideClick";
import { FiLogOut } from "react-icons/fi";
import userIcon from "../assets/userIcon.png";
import { NavLink } from "react-router-dom";

const DropDownMenu = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = OutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Admin</span>
          <img src={userIcon} alt="User avatar" className="user-icon" />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <NavLink exact to="/logout">
                <a href="#">
                  <span>Logout</span> <FiLogOut />
                </a>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropDownMenu;
