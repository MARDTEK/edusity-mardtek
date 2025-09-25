import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img className="logo" src={logo} alt="logo" />
      <ul className={mobileMenu ? "show-mobile-menu" : ""}>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} duration={500} offset={-260}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-150}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} duration={500} offset={-260}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} offset={-260}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-260}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img className="menu-icon" src={menu_icon} alt="" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
