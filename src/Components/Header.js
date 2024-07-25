import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Css/header.css";
import {
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  FireOutlined,
} from "@ant-design/icons";
import img from "../logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handlecart = () => {
    navigate("/cart");
  };
  const handleorder = () => {
    navigate(`/`);
  };

  const [showProfileMenu, setShowProfileMenu] = useState(true);

  const handleProfileClick = () => {
    setShowProfileMenu(true);
  };

  const handleSettingClick = () => {
    setShowProfileMenu(false);
  };

  console.log(showProfileMenu);

  const [addMargin, setAddMargin] = useState(false);

  const handleClick = () => {
    setAddMargin(!addMargin); // Toggle the state to add/remove margin
  };

  return (
    <div className="header_home">
      <nav
        style={{
          marginBottom: addMargin ? "220px" : "0px",
          backgroundColor: "",
        }}
      >
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </label>
        <label style={{ display: "flex" }}>
          <img
            src={img}
            alt="logo"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "100px",
              marginTop: "10px",
              margin: "10px",
            }}
          />
          <label className="logo">Surendra Naik</label>
        </label>
        <ul className="ul">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item" style={{ marginTop: "10px" }}>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item" style={{ marginTop: "10px" }}>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item" style={{ marginTop: "10px", marginRight: "30px" }}>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="cartnav">
              <i className="bi bi-file-earmark-person-fill"></i> Resume
            </NavLink>
          </li>
     
          {/* <li>
            <NavDropdown  id="basic-nav-dropdown" style={{ marginTop: "10px" }}>
           
                <DropdownItem href="/login" className="custom-dropdown-item">
                  login with user credentials
                </DropdownItem>
             
              
                <>
                  <DropdownItem
                    onClick={handlecart}
                    className="customdetails-dropdown-item  inline-flex items-center  py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                  >
                    MY Cart 
                  </DropdownItem>

                  <DropdownItem
                  className=" customdetails-dropdown-item  inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                  >
                  <NavLink>
              
              
                    My Orders
                    </NavLink>
                  </DropdownItem>

                  <DropdownItem
                    onClick={handleSettingClick}
                    className=" customdetails-dropdown-item inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                  >
                    Setting
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleLogout}
                    className=" customdetails-dropdown-item inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                  >
                    Logout
                  </DropdownItem>
                </>
             
            </NavDropdown>
          </li> */}


        </ul>
      </nav>
    </div>
  );
}

export default Header;
