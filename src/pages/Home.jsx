import { useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DropdownMenu from '../components/DropdownMenu'
import '../css/Home.css'

const HomePage = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isSidebarOpen1, setSidebarOpen1] = useState(false);
  const [isSidebarOpen2, setSidebarOpen2] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  };

  const toggleSidebar1 = () => setSidebarOpen1(!isSidebarOpen1);
  const toggleSidebar2 = () => setSidebarOpen2(!isSidebarOpen2);

  return (
    <body className={`main ${isSidebarOpen1 ? 'sidebar-open' : ''}`}>
      {isSidebarOpen1 && <div className="overlay" onClick={toggleSidebar1}></div>}
      <nav expand="lg" className="navBar navbar-dark d-flex justify-content-between align-items-center">
        <a href="/" className="web">
          <img src="amazon.png" alt="amazon" className="logo" />
        </a>
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

        <a href="#action2" className="language d-flex align-items-center pt-3">
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
        <a href="/cart" className="cartButton d-flex align-items-end">
          <img src="cart.svg" alt="cart" className="cart" />Cart
        </a>
      </nav>

      <div className="B">
        <nav className="navBarB navbar-dark d-flex align-items-center">
          <button className="navbar-toggler d-flex align-items-center" onClick={toggleSidebar1}>
            <span className="navbar-toggler-icon"></span>
            All
          </button>

          <div className="nav-xshop d-flex align-items-center">
            <a href="/" className="navbar-b">
              Today's Deals
            </a>
            <a href="/" className="navbar-b">
              Customer Service
            </a>
            <a href="/" className="navbar-b">
              Registry
            </a>
            <a href="/" className="navbar-b">
              Gift Cards
            </a>
            <a href="/" className="navbar-b">
              Sell
            </a>
          </div>
        </nav>

        <aside className={`list-group ${isSidebarOpen1 ? 'open' : ''}`} id="list-example">
          <button
            className="menuCloseBtn"
            onClick={toggleSidebar1}>
            &times;
          </button>
          <a href="/" className="menu-signIn d-flex align-items-center">
            <AccountCircleIcon sx={{ fontSize: 28, color: '#ffffff', mr: 1 }} />
            Hello, sign in
          </a>
          <div className="menu-info">
            <div className="menu-info-group">
              <div className="menu-title">Digital Content & Devices</div>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Amazon Music
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Kindle E-readers & Books
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Amazon Appstore
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
            </div>
            <div className="menu-info-group">
              <div className="menu-title">Shop by Department</div>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Electronics
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Computers
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Smart Home
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Arts & Crafts
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="seeAllButton d-flex align-items-center"
                onClick={toggleSidebar2}>
                See all
                <ExpandMoreIcon className="arrow-icon" sx={{ fontSize: 24, color: '#c0c0c0' }} />
              </button>
            </div>
            <div className="menu-info-group">
              <div className="menu-title">Programs & Features</div>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Gift Cards
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <a href="/" className="d-flex align-items-center">Shop By Interest</a>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Amazon Live
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                International Shopping
                <ArrowForwardIosOutlinedIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="seeAllButton d-flex align-items-center"
                onClick={toggleSidebar2}>
                See all
                <ExpandMoreIcon className="arrow-icon" sx={{ fontSize: 24, color: '#c0c0c0' }} />
              </button>
            </div>
            <div className="menu-info-groupHS">
              <div className="menu-title">Help & Settings</div>
              <a href="/" className="d-flex align-items-center">Your Account</a>
              <a href="/" className="d-flex align-items-center">
                <LanguageIcon sx={{ fontSize: 14, color: '#c0c0c0', mr: 1 }} />
                English
              </a>
              <a href="/" className="d-flex align-items-center">
                <img src="us-flag.png" alt="us-flag" className="us-flag" />
                United States
              </a>
              <a href="/" className="d-flex align-items-center">Customer Service</a>
              <a href="/" className="d-flex align-items-center">Sign in</a>
            </div>
          </div>
        </aside>

        <div className={`asd ${isSidebarOpen2 ? 'open' : ''}`} id="list-example">
          <div className="menu-info">
            <button
              className="amazonMusicButton d-flex align-items-center"
              onClick={toggleSidebar2}>
              <ArrowBackIcon className="arrow-icon" sx={{ fontSize: 20, color: '#c0c0c0', mr: 1 }} />
              MAIN MENU
            </button>
            <div className="menu-info-group">
              <div className="menu-title">Stream Music</div>
              <a href="/" className="d-flex align-items-center">Amazon Music Unlimited</a>
              <a href="/" className="d-flex align-items-center">Free Streaming Music</a>
              <a href="/" className="d-flex align-items-center">Podcasts</a>
              <a href="/" className="d-flex align-items-center">Open Web Player</a>
              <a href="/" className="d-flex align-items-center">Download the app</a>
            </div>
          </div>
        </div>
      </div>

      <main className="main d-flex justify-content-center">
        <img src="background.jpg" alt="background" className="background" />
      </main>
    </body>
  );
}

export default HomePage
