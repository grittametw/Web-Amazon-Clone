import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropdownMenu from '../components/DropdownMenu'
import '../css/Home.css'

const HomePage = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const [isNavCollapsed2, setIsNavCollapsed2] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleNavCollapse2 = () => setIsNavCollapsed2(!isNavCollapsed2);

  return (
    <body>
      <nav expand="lg" className="navBar navbar-dark d-flex justify-content-between align-items-center">
        <a href="/" className="web"><img src="amazon.png" alt="amazon" className="logo" /></a>
        <a href="#action2" className="location d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <div>Deliver to<p>Thailand</p></div>
        </a>

        <div className="searchBar d-flex">
          <button variant="outline-success" className="filterButton d-flex align-items-center">All
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          <input
            type="search"
            placeholder="Search Amazon"
            className="searchInput"
            aria-label="Search" />
          <button className="searchButton d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>

        <a href="#action2" className="language d-flex align-items-center">
          <img src="us-flag.png" alt="us-flag" className="us-flag" />EN
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </a>
        <div
          className="sign d-flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#action3" className="lists">Hello, sign in<p>Account & Lists
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg></p>
          </a>
          <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
            <DropdownMenu />
          </div>
        </div>
        <a href="#action1" className="returnOrders">Returns <p>& Orders</p></a>
        <a href="/cart" className="cart">Cart</a>
      </nav>

      <div className="b">
        <nav className="navBarP navbar-dark d-flex align-items-center">
          <button className="navbar-toggler d-flex align-items-center" type="button" data-toggle="collapse" data-target="#list-example" aria-controls="list-example" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
            All
          </button>

          <div className="nav-xshop d-flex align-items-center">
            <a href="" className="navbar-b">
              Today's Deals
            </a>
            <a href="" className="navbar-b">
              Customer Service
            </a>
            <a href="" className="navbar-b">
              Registry
            </a>
            <a href="" className="navbar-b">
              Gift Cards
            </a>
            <a href="" className="navbar-b">
              Sell
            </a>
          </div>
        </nav>

        <div className={`${isNavCollapsed ? 'collapse' : ''} list-group`} id="list-example">
          <nav className="menu">
            <div className="menu-title">
              Hello, sign in
            </div>
            <div className="menu-info">
              <button className="amazonMusicButton" type="button" data-toggle="collapse" data-target="#list-example" aria-controls="list-example" aria-expanded={!isNavCollapsed2 ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse2}>Amazon Music
              </button>
            </div>
          </nav>
        </div>

        <div className={`${isNavCollapsed2 ? 'collapse' : ''} list-group`} id="list-example">
          <nav className="menu">
            <div className="menu-title">
              Hello, sign in
            </div>
            <div className="menu-info">
              <button className="amazonMusicButton" >MAIN MENU
                <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                <a className="list-group-item list-group-item-action" href="#list-item-2">Item2</a>
                <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </body>
  );
}

export default HomePage
