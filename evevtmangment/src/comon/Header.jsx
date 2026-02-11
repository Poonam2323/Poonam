import React from 'react'

function Header() {
  return (
    <div>
         {/* <!-- Header Section Begin --> */}
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
          <li className="active"><a href="./index.html">Home</a></li>
          <li><a href="./about-us.html">About</a></li>
          <li><a href="./speaker.html">Speakers</a>
            <ul className="dropdown">
              <li><a href="#">Jayden</a></li>
              <li><a href="#">Sara</a></li>
              <li><a href="#">Emma</a></li>
              <li><a href="#">Harriet</a></li>
            </ul>
          </li>
          <li><a href="./schedule.html">Schedule</a></li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./contact.html">Contacts</a></li>
        </ul>
      </nav>
      <a href="#" className="primary-btn top-btn"><i className="fa fa-ticket" /> Ticket</a>
    </div>
    <div id="mobile-menu-wrap" />
  </div>
</header>

    {/* <!-- Header End --> */}
    </div>
  )
}

export default Header