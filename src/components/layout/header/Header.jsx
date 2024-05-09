import React, { useState } from "react";
import "./header.scss";
import logo from "../../../assets/images/Logo.svg";
import { Navbar } from "../../../static/ProductsData";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [show, setShow] = useState(false);

  const navbarItem = Navbar?.map((el) => (
    <li key={el.id} className="navbar__list">
      <a href="#" className="navbar__link">
        {el.title}
      </a>
    </li>
  ));

  return (
    <nav className="navbar">
      <div className="navbar__card container">
        <div>
          <a className="navbar__logo" href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="navbar__item">{navbarItem}</ul>
        <div className="navbar__icon">
          <FiSearch />
          <FaUser />
          <FaCartShopping />
          <IoMdMenu onClick={() => setShow(true)} className="icons" />
        </div>
        {show ? (
          <div onClick={() => setShow(false)} className="navbar__overlay"></div>
        ) : (
          <></>
        )}
        <div className={`navbar__show ${show ? "show" : ""}`}>{navbarItem}</div>
      </div>
    </nav>
  );
}

export default Header;
