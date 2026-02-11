import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
{/* Header Section Begin */}
<header className="header-section">
  <div className="container">
    <div className="logo">
      <a href="./index.html">
        <img src="img/logo.png" alt />
      </a>
    </div>
    <div className="nav-menu">
      <nav className="mainmenu mobile-menu">
        <ul>
          <li><NavLink to="/" className="">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/speaker">Speakers</NavLink>
            <ul className="dropdown">
              <li><a href="#">Jayden</a></li>
              <li><a href="#">Sara</a></li>
              <li><a href="#">Emma</a></li>
              <li><a href="#">Harriet</a></li>
            </ul>
          </li>
          <li><NavLink to="/schedule">Schedule</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contacts</NavLink></li>
        </ul>
      </nav>
      <a href="#" className="primary-btn top-btn"><i className="fa fa-ticket" /> Ticket</a>
    </div>
    <div id="mobile-menu-wrap" />
  </div>
</header>
{/* Header End */}

    </div>
  )
}

export default Header
