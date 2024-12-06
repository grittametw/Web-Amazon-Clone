import { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import DropdownMenu from '../components/DropdownMenu'
import '../css/Home.css'

const HomePage = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isSidebarOpen1, setSidebarOpen1] = useState(false);
  const [isSidebarOpen2, setSidebarOpen2] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    "https://m.media-amazon.com/images/I/61K28C55p4L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71u+Dtt6JTL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61eo-28eQJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71CtV-IknvL._SX3000_.jpg",
  ];

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  };

  const toggleSidebar1 = () => setSidebarOpen1(!isSidebarOpen1);
  const toggleSidebar2 = () => setSidebarOpen2(!isSidebarOpen2);

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <body className={`body${isSidebarOpen1 ? 'sidebar-open' : ''}`}>
      {isSidebarOpen1 && <div className="overlay" onClick={toggleSidebar1}></div>}
      <nav expand="lg" className="navBar navbar-dark d-flex justify-content-between align-items-center">
        <a href="/" className="web">
          <img src="amazon.png" alt="amazon" className="logo" />
        </a>
        <a href="#action2" className="location d-flex align-items-end">
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
          <div className="cartAmount d-flex flex-column align-items-center ">
            0
            <img src="cart.svg" alt="cart" className="cart" />
          </div>
          Cart
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
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Kindle E-readers & Books
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Amazon Appstore
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
            </div>
            <div className="menu-info-group">
              <div className="menu-title">Shop by Department</div>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Electronics
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Computers
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Smart Home
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Arts & Crafts
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
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
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <a href="/" className="d-flex align-items-center">Shop By Interest</a>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                Amazon Live
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center"
                onClick={toggleSidebar2}>
                International Shopping
                <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
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

        <div className={`list-group-info ${isSidebarOpen2 ? 'open' : ''}`} id="list-example">
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

      <main className="d-flex flex-column justify-content-center align-items-center">
        <img src={slides[slideIndex]} alt="background" className="background" />

        <div className="boxButton d-flex justify-content-between">
          <button className="changeBGLButton" onClick={prevSlide}>
            <ArrowBackIosNewIcon className="arrow-icon" sx={{ fontSize: 48 }} />
          </button>
          <button className="changeBGRButton" onClick={nextSlide}>
            <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 48 }} />
          </button>
        </div>

        <Box className="boxxx d-flex flex-column justify-content-center align-items-center">
          <Grid
            container
            direction="column"
            spacing={2.5}>
            <div className="d-flex justify-content-center gap-4">
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Small gifts under $20</h5>
                <a href="/" className="shop-paragraph d-flex flex-column">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v2._SY304_CB573698005_.jpg"
                    alt="shopItemsSingle"
                    className="shopItemsSingle" />
                  Shop now
                </a>
              </Paper>
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>FREE Shipping to Thailand</h5>
                <a href="/" className="shop-paragraph d-flex flex-column">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/1460058_2528408_us_gw_pc_single_category_card_1x_379x304_us-en._SY304_CB609924360_.jpg"
                    alt="shopItemsSingle"
                    className="shopItemsSingle" />
                  Learn more
                </a>
              </Paper>
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Shop for your home essentials</h5>
                <Grid
                  container
                  direction="column"
                  spacing={3}
                  className="menuGroup">
                  <div className="d-flex gap-3">
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroup" />
                      Cleaning Tools
                    </a>
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroup" />
                      Home Storage
                    </a>
                  </div>
                  <div className="d-flex gap-3">
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroup" />
                      Home Decor
                    </a>
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroup" />
                      Bedding
                    </a>
                  </div>
                </Grid>
                <a href="/" className="shop-paragraph">Discover more in Home</a>
              </Paper>
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Deals in PCs</h5>
                <a href="/" className="shop-paragraph d-flex flex-column">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
                    alt="shopItemsSingle"
                    className="shopItemsSingle" />
                  Shop now
                </a>
              </Paper>

            </div>

            <div className="d-flex justify-content-center gap-4">
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Must-see Black Friday Week deals</h5>
                <Grid
                  container
                  direction="column"
                  spacing={3}
                  className="menuGroup">
                  <div className="d-flex gap-3">
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_761_BFW_CM_DQC_Home_1A_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Home
                    </a>
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_767_BFW_CM_DQC_Sports_Outdoors_2C_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Sports & outdoors
                    </a>
                  </div>
                  <div className="d-flex gap-3">
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_764_BFW_CM_DQC_Beauty_1D_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Beauty
                    </a>
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_766_BFW_CM_DQC_Headphones_2B_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Headphones
                    </a>
                  </div>
                </Grid>
                <a href="/" className="shop-paragraph">Shop all deals</a>
              </Paper>
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Black Friday Week deals are here</h5>
                <Grid
                  container
                  direction="column"
                  spacing={3}
                  className="menuGroup">
                  <div className="d-flex gap-3">
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_763_BFW_CM_DQC_ComputerVideoGames_1C_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Tech & gaming
                    </a>
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_771_BFW_CM_DQC_Deals_Toys_Games_3C_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Toys & games
                    </a>
                  </div>
                  <div className="d-flex gap-3">
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_765_BFW_CM_DQC_Kitchen_2A_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Kitchen
                    </a>
                    <a href="/" className="shopGroup-paragraph d-flex flex-column">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_762_BFW_CM_DQC_Fashion_1B_1x_v3._SY116_CB541717183_.jpg"
                        alt="shopItemsGroup"
                        className="shopItemsGroupO" />
                      Fashion
                    </a>
                  </div>
                </Grid>
                <a href="/" className="shop-paragraph">Shop all deals</a>
              </Paper>
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Get your game on</h5>
                <a href="/" className="shop-paragraph d-flex flex-column">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg"
                    alt="shopItemsSingle"
                    className="shopItemsSingle" />
                  Shop gaming
                </a>
              </Paper>
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Toys under $25</h5>
                <a href="/" className="shop-paragraph d-flex flex-column">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
                    alt="shopItemsSingle"
                    className="shopItemsSingle" />
                  Shop now
                </a>
              </Paper>
            </div>

            <Paper
              sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
              <h5>Related to items you've viewed
                <a href="/" className="shop-paragraph-h">See more</a>
              </h5>
              <div className="relatedItems d-flex gap-4">
                <img src="https://m.media-amazon.com/images/I/71cZRBR0kHL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/51T9FwHWNhL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61UqpOlddiL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61sYfjfDK0L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61WrKwuOURL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71h4fHz4bEL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71OZ8HzaGIL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/816GVjgVOeL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/81-L22dYT2L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/619gpyUVF-S._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71kKaxCx48L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71-fUpapWfL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/81kNu3KiIGL._AC_SY200_.jpg" alt="relatedItems" />
              </div>
            </Paper>

            <Paper
              sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
              <h5>New international customers purchased</h5>
              <div className="relatedItems d-flex gap-4">
                <img src="https://m.media-amazon.com/images/I/81gSnME+86L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61MmbH-F9sL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61xeu94oqjL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71TeLBggnwL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/81O6JfipQhL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71l4l6o2drL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/518Qh+G3I5L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/518Qh+G3I5L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/619o+eK+lhL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/81FzqEtOrfL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/41o8qd4CxHL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61gR7FVky8L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71fkAf32xNL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/611gDNa-pOL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61PgGAMVvAL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/41H1NQVybjL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71HTftYEVTL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71-BI3Ij9rL._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/61PKN7iUr-L._AC_SY200_.jpg" alt="relatedItems" />
                <img src="https://m.media-amazon.com/images/I/71CQ6esBqFL._AC_SY200_.jpg" alt="relatedItems" />
              </div>
            </Paper>

          </Grid>
        </Box>
      </main>


      <div className="historyBar d-flex flex-column justify-content-between">
        <div className="historyBarBox d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h6>Gift ideas inspired by your shopping history</h6>
              <a href="/" className="shop-paragraph-h">Show more</a>
            </div>
            <p>Page 1 of 2</p>
          </div>
          <div className="historyItemsBar d-flex align-items-center gap-4">
            <button className="historyItemsButton d-flex align-items-center"><ArrowBackIosNewIcon sx={{ fontSize: 16 }} /></button>
            <div className="historyItemsBox d-flex flex-column">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51T9FwHWNhL._AC_UL165_SR165,165_.jpg"
                alt="historyItems"
                className="historyItems" />
              <a href="/" className="historyItemsName">Powerful PuroAir HEPA Air Purifiers for Home Large Rooms - Filters Up To 99% of Pollutants, Smoke, Pollen, Dust, and VOCs - Quiet HEPA Air Filter - Air Purifiers for Bedroom - Covers 1,115 Sq Ft</a>
              <a href="/" className="d-flex historyItemsRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full checked"></span>
                <p>10,743</p>
              </a>
              <p>70K+ viewed in past month</p>
              <div className="historyItemsSale d-flex align-items-center">
                <button>26% off</button>
                <p>Cyber Monday Deal</p>
              </div>
              <p>Get it as soon as Monday, Dec 16</p>
              <p>FREE Shipping by Amazon</p>
            </div>
            <div className="historyItemsBox d-flex flex-column">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71cZRBR0kHL._AC_UL165_SR165,165_.jpg"
                alt="historyItems"
                className="historyItems" />
              <a href="/" className="historyItemsName">Shark Air Purifiers for Home Large Room with NeverChange Air Filter, 5 Year HEPA Filter, Covers 650 Sq. ft, Odor Neutralizer and Clean Sense Technology, Removes 99.98% of Dust & Allergens, HP152</a>
              <a href="/" className="d-flex historyItemsRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full checked"></span>
                <p>10,743</p>
              </a>
              <p>70K+ viewed in past month</p>
              <div className="historyItemsSale d-flex align-items-center">
                <button>26% off</button>
                <p>Cyber Monday Deal</p>
              </div>
              <p>Get it as soon as Monday, Dec 16</p>
              <p>FREE Shipping by Amazon</p>
            </div>
            <div className="historyItemsBox d-flex flex-column">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71IhljAoVGL._AC_UL165_SR165,165_.jpg"
                alt="historyItems"
                className="historyItems" />
              <a href="/" className="historyItemsName">Shark Air Purifier for Home Large Room, Clean Sense Technology, HEPA Air Filter, 1000 Sq Ft, Kitchen, Captures 99.98% of Particles, Pet Dander, Pollutants, Dust, Smoke, Allergens & Smells, HP201</a>
              <a href="/" className="d-flex historyItemsRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full checked"></span>
                <p>10,743</p>
              </a>
              <p>70K+ viewed in past month</p>
              <div className="historyItemsSale d-flex align-items-center">
                <button>26% off</button>
                <p>Cyber Monday Deal</p>
              </div>
              <p>Get it as soon as Monday, Dec 16</p>
              <p>FREE Shipping by Amazon</p>
            </div>
            <div className="historyItemsBox d-flex flex-column">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71EKbl+krDL._AC_UL165_SR165,165_.jpg"
                alt="historyItems"
                className="historyItems" />
              <a href="/" className="historyItemsName">Shark Air Purifiers for Bedroom, Office, Dorm, Small Room, HEPA Air Filter, Odor Eliminator, Covers Up To 500 SQ FT, Air Filtration Removes Smoke, Dust, Allergens, Pet Dander, and Pollutants, HP102</a>
              <a href="/" className="d-flex historyItemsRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full checked"></span>
                <p>10,743</p>
              </a>
              <p>70K+ viewed in past month</p>
              <div className="historyItemsSale d-flex align-items-center">
                <button>26% off</button>
                <p>Cyber Monday Deal</p>
              </div>
              <p>Get it as soon as Monday, Dec 16</p>
              <p>FREE Shipping by Amazon</p>
            </div>
            <div className="historyItemsBox d-flex flex-column">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61bARn6szFL._AC_UL165_SR165,165_.jpg"
                alt="historyItems"
                className="historyItems" />
              <a href="/" className="historyItemsName">Honeywell AllergenPlus HEPA Air Purifier, Airborne Allergen Reducer for Medium Rooms, Reduces Allergens, Smoke, Wildfire Smoke, Pollen, Pet Dander and More, White, HPA104</a>
              <a href="/" className="d-flex historyItemsRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full checked"></span>
                <p>10,743</p>
              </a>
              <p>70K+ viewed in past month</p>
              <div className="historyItemsSale d-flex align-items-center">
                <button>26% off</button>
                <p>Cyber Monday Deal</p>
              </div>
              <p>Get it as soon as Monday, Dec 16</p>
              <p>FREE Shipping by Amazon</p>
            </div>
            <div className="historyItemsBox d-flex flex-column">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61-d0MX0UcL._AC_UL165_SR165,165_.jpg"
                alt="historyItems"
                className="historyItems" />
              <a href="/" className="historyItemsName">Coway Airmega 400S App-Enabled Smart Air Purifier (Covers 1,560 sq. ft.), True HEPA Air Purifier with Smart Technology, Compatible with Amazon Alexa and Google Home, White (111012)</a>
              <a href="/" className="d-flex historyItemsRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full checked"></span>
                <p>10,743</p>
              </a>
              <p>70K+ viewed in past month</p>
              <div className="historyItemsSale d-flex align-items-center">
                <button>26% off</button>
                <p>Cyber Monday Deal</p>
              </div>
              <p>Get it as soon as Monday, Dec 16</p>
              <p>FREE Shipping by Amazon</p>
            </div>
            <div className="historyItemsBox d-flex flex-column">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81B7Up04D+L._AC_UL165_SR165,165_.jpg"
                alt="historyItems"
                className="historyItems" />
              <a href="/" className="historyItemsName">Pure Enrichment PureZone Elite True HEPA Large Room Tower Air Purifier with Air Quality Monitor, 4 Stage Filtration and UV-C Light, Helps Destroy Bacteria, Smoke, Pollen & Dust (White)</a>
              <a href="/" className="d-flex historyItemsRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full checked"></span>
                <p>10,743</p>
              </a>
              <p>70K+ viewed in past month</p>
              <div className="historyItemsSale d-flex align-items-center">
                <button>26% off</button>
                <p>Cyber Monday Deal</p>
              </div>
              <p>Get it as soon as Monday, Dec 16</p>
              <p>FREE Shipping by Amazon</p>
            </div>
            <button className="historyItemsButton d-flex align-items-center"><ArrowForwardIosIcon sx={{ fontSize: 16 }} /></button>
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <h4>See personalized recommendations</h4>
            <button className="signInButton">Sign in</button>
            <div className="d-flex">
              <p>New customer?</p>
              <a href="/">Start here.</a>
            </div>
          </div>
        </div>
        asd
      </div>
      <div className="navFooterVertical">
        <h6>Get to Know Us</h6>
        <h6>Make Money with Us</h6>
        <h6>Amazon Payment Products</h6>
        <h6>Let Us Help You</h6>
      </div>
      <div className="navFooterLine">
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
        <a href="/">Amazon Music Stream millions of songs</a>
      </div>

    </body>
  );
}

export default HomePage
