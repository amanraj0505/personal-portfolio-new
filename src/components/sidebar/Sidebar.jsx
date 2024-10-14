import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.png";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="" className="nav__image" />
        </a>
        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="list_item">
                <a href="#home" className="nav_link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="list_item">
                <a href="#about" className="nav_link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="list_item">
                <a href="#resume" className="nav_link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="list_item">
                <a href="#portfolio" className="nav_link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="list_item">
                <a href="#testimonials" className="nav_link">
                  <i className="icon-badge"></i>
                </a>
              </li>
              <li className="list_item">
                <a href="#contact" className="nav_link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2023-2025</span>
        </div>
        <div
          className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <i className="icon-menu"></i>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
