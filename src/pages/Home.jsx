import { useState, useEffect } from 'react'
import { ArrowForwardIos, ArrowBackIosNew, AccountCircle, ExpandMore, Language, AttachMoney } from '@mui/icons-material';
import { Box, Grid2, Paper } from '@mui/material';
import '../css/Home.css'

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen1, setSidebarOpen1] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const options = [
    { value: 'search-alias=aps', label: 'All Departments' },
    { value: 'search-alias=arts-crafts-intl-ship', label: 'Arts & Crafts' },
    { value: 'search-alias=automotive-intl-ship', label: 'Automotive' },
    { value: 'search-alias=baby-products-intl-ship', label: 'Baby' },
    { value: 'search-alias=beauty-intl-ship', label: 'Beauty & Personal Care' },
    { value: 'search-alias=stripbooks-intl-ship', label: 'Books' },
    { value: 'search-alias=fashion-boys-intl-ship', label: "Boys' Fashion" },
    { value: 'search-alias=computers-intl-ship', label: 'Computers' },
    { value: 'search-alias=deals-intl-ship', label: 'Deals' },
    { value: 'search-alias=digital-music', label: 'Digital Music' },
    { value: 'search-alias=electronics-intl-ship', label: 'Electronics' },
    { value: 'search-alias=fashion-girls-intl-ship', label: "Girls' Fashion" },
    { value: 'search-alias=hpc-intl-ship', label: 'Health & Household' },
    { value: 'search-alias=kitchen-intl-ship', label: 'Home & Kitchen' },
    { value: 'search-alias=industrial-intl-ship', label: 'Industrial & Scientific' },
    { value: 'search-alias=digital-text', label: 'Kindle Store' },
    { value: 'search-alias=luggage-intl-ship', label: 'Luggage' },
    { value: 'search-alias=fashion-mens-intl-ship', label: "Men's Fashion" },
    { value: 'search-alias=movies-tv-intl-ship', label: 'Movies & TV' },
    { value: 'search-alias=music-intl-ship', label: 'Music, CDs & Vinyl' },
    { value: 'search-alias=pets-intl-ship', label: 'Pet Supplies' },
    { value: 'search-alias=instant-video', label: 'Prime Video' },
    { value: 'search-alias=software-intl-ship', label: 'Software' },
    { value: 'search-alias=sporting-intl-ship', label: 'Sports & Outdoors' },
    { value: 'search-alias=tools-intl-ship', label: 'Tools & Home Improvement' },
    { value: 'search-alias=toys-and-games-intl-ship', label: 'Toys & Games' },
    { value: 'search-alias=videogames-intl-ship', label: 'Video Games' },
    { value: 'search-alias=fashion-womens-intl-ship', label: "Women's Fashion" },
  ];

  const slides = [
    "https://m.media-amazon.com/images/I/61K28C55p4L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71u+Dtt6JTL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61eo-28eQJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71CtV-IknvL._SX3000_.jpg",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleSidebar1 = () => setSidebarOpen1(!isSidebarOpen1);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

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

      {/* HeaderNavbarFirst */}
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
          <div className="filterButton">
            <div className="select-button d-flex align-items-center" onClick={toggleDropdown}>
              {selectedOption}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
            {isOpen && (
              <div className="custom-dropdown__options">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="custom-dropdown__option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
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
        <a href="#action3" className="lists">Hello, sign in<p>Account & Lists
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg></p>
        </a>
        <a href="#action1" className="returnOrders">Returns <p>& Orders</p></a>
        <a href="/" className="cartButton d-flex align-items-end">
          <div className="cartAmount d-flex flex-column align-items-center ">
            0
            <img src="cart.svg" alt="cart" className="cart" />
          </div>
          Cart
        </a>
      </nav>

      {/* BottomPanel & Menubar */}
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

        <div className={`list-group ${isSidebarOpen1 ? 'open' : ''}`} id="list-1">
          <button
            className="menuCloseBtn"
            onClick={toggleSidebar1}>
            &times;
          </button>
          <a href="/" className="menu-signIn d-flex align-items-center">
            <AccountCircle sx={{ fontSize: 28, color: '#ffffff', mr: 1 }} />
            Hello, sign in
          </a>
          <div className="menu-info">
            <div className="menu-info-group">
              <div className="menu-title">Digital Content & Devices</div>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Amazon Music
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Kindle E-readers & Books
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Amazon Appstore
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
            </div>
            <div className="menu-info-group">
              <div className="menu-title">Shop by Department</div>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Electronics
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Computers
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Smart Home
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Arts & Crafts
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="seeAllButton d-flex align-items-center">
                See all
                <ExpandMore className="arrow-icon" sx={{ fontSize: 24, color: '#c0c0c0' }} />
              </button>
            </div>
            <div className="menu-info-group">
              <div className="menu-title">Programs & Features</div>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Gift Cards
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <a href="/" className="d-flex align-items-center">Shop By Interest</a>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                Amazon Live
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="amazonMusicButton d-flex justify-content-between align-items-center">
                International Shopping
                <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 16, color: '#c0c0c0' }} />
              </button>
              <button
                className="seeAllButton d-flex align-items-center">
                See all
                <ExpandMore className="arrow-icon" sx={{ fontSize: 24, color: '#c0c0c0' }} />
              </button>
            </div>
            <div className="menu-info-groupHS">
              <div className="menu-title">Help & Settings</div>
              <a href="/" className="d-flex align-items-center">Your Account</a>
              <a href="/" className="d-flex align-items-center">
                <Language sx={{ fontSize: 14, color: '#c0c0c0', mr: 1 }} />
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
        </div>
      </div>

      {/* Main Content */}
      <main className="d-flex flex-column justify-content-center align-items-center">
        <img src={slides[slideIndex]} alt="background" className="background" />

        <div className="boxButton d-flex justify-content-between">
          <button className="changeBGLButton" onClick={prevSlide}>
            <ArrowBackIosNew className="arrow-icon" sx={{ fontSize: 48 }} />
          </button>
          <button className="changeBGRButton" onClick={nextSlide}>
            <ArrowForwardIos className="arrow-icon" sx={{ fontSize: 48 }} />
          </button>
        </div>

        <Box className="boxxx d-flex flex-column justify-content-center align-items-center">
          <Grid2
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
                <Grid2
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
                </Grid2>
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
                <Grid2
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
                </Grid2>
                <a href="/" className="shop-paragraph">Shop all deals</a>
              </Paper>
              <Paper
                className="paper d-flex flex-column"
                sx={{ backgroundColor: '#fff', padding: 2.5, color: '#000', borderRadius: '0' }}>
                <h5>Black Friday Week deals are here</h5>
                <Grid2
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
                </Grid2>
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

          </Grid2>
        </Box>
      </main>

      {/* Historybar */}
      <div className="historyBar d-flex flex-column justify-content-between">
        <div className="historyBarBox d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h6>Gift ideas inspired by your shopping history</h6>
              <a href="/" className="shop-paragraph-h">Show more</a>
            </div>
          </div>
          <div className="historyItemsBar d-flex align-items-center gap-4">
            <button className="historyItemsButton d-flex align-items-center"><ArrowBackIosNew sx={{ fontSize: 16 }} /></button>
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
            <button className="historyItemsButton d-flex align-items-center"><ArrowForwardIos sx={{ fontSize: 16 }} /></button>
          </div>
          <div className="personalizedRec d-flex flex-column align-items-center">
            <h4>See personalized recommendations</h4>
            <button className="signInButton">Sign in</button>
            <div className="newCTM d-flex">
              <p className="text">New customer?</p>
              <a href="/" className="link">Start here.</a>
            </div>
          </div>
        </div>
      </div>

      <button className="topButton">Back to top</button>

      {/* FooterVertical */}
      <div className="navFooterVertical">
        <div className="navFooterVerticalBox d-flex justify-content-center">
          <div className="box-1 d-flex flex-column">
            <h6>Get to Know Us</h6>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
            <a href="/">About Amazon</a>
            <a href="/">Investor Relations</a>
            <a href="/">Amazon Devices</a>
            <a href="/">Amazon Science</a>
          </div>
          <div className="box-2 d-flex flex-column">
            <h6>Make Money with Us</h6>
            <a href="/">Sell products on Amazon</a>
            <a href="/">Sell on Amazon Business</a>
            <a href="/">Sell apps on Amazon</a>
            <a href="/">Become an Affiliate</a>
            <a href="/">Advertise Your Products</a>
            <a href="/">Self-Publish with Us</a>
            <a href="/">Host an Amazon Hub</a>
            <a href="/">See More Make Money with Us</a>
          </div>
          <div className="box-3 d-flex flex-column">
            <h6>Amazon Payment Products</h6>
            <a href="/">Amazon Business Card</a>
            <a href="/">Shop with Points</a>
            <a href="/">Reload Your Balance</a>
            <a href="/">Amazon Currency Converter</a>
          </div>
          <div className="box-4 d-flex flex-column">
            <h6>Let Us Help You</h6>
            <a href="/">Amazon and COVID-19</a>
            <a href="/">Your Account</a>
            <a href="/">Your Orders</a>
            <a href="/">Shipping Rates & Policies</a>
            <a href="/">Returns & Replacements</a>
            <a href="/">Manage Your Content and Devices</a>
            <a href="/">Help</a>
          </div>
        </div>
        <div className="langSetting d-flex justify-content-center align-items-center">
          <img src="amazon.png" alt="amazon" className="logo" />
          <div className="d-flex gap-2">
            <a href="/" className="d-flex align-items-center">
              <Language sx={{ fontSize: 16, color: '#fff', mr: 1 }} />
              English
              <img src="up-down-arrow.png" alt="up-down-arrow" className="up-down-arrow" />
            </a>
            <a href="/" className="d-flex align-items-center">
              <AttachMoney sx={{ fontSize: 16, color: '#fff' }} />
              USD - U.S. Dollar
            </a>
            <a href="/" className="d-flex align-items-center">
              <img src="us-flag.png" alt="us-flag" className="us-flag" />
              United States
            </a>
          </div>
        </div>
      </div>

      {/* FooterLine */}
      <div className="navFooterLine">
        <div className="navFooterLineBox d-flex justify-content-center">
          <table>
            <tr className="d-flex">
              <td className="navFooterLineItems">
                <a href="/">
                  Amazon Music
                  <p>
                    Stream
                    <br />
                    millions
                    <br />
                    of songs
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Amazon Ads
                  <p>
                    Reach customers
                    <br />
                    wherever they
                    <br />
                    spend their time
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  6pm
                  <p>
                    Score deals
                    <br />
                    on fashion brands
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  AbeBooks
                  <p>
                    Books, art
                    <br />
                    & collectibles
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  ACX
                  <p>
                    Audiobook Publishing
                    <br />
                    Made Easy
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Sell on Amazon
                  <p>
                    Start a Selling
                    <br />
                    Account
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Veeqo
                  <p>
                    Shipping Software
                    <br />
                    Inventory
                    <br />
                    Management
                  </p>
                </a>
              </td>
            </tr>
            <tr>&nbsp;</tr>
            <tr className="d-flex">
              <td className="navFooterLineItems">
                <a href="/">
                  Amazon Business
                  <p>
                    Everything
                    <br />
                    For
                    <br />
                    Your
                    <br />
                    Business
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  AmazonGlobal
                  <p>Ship Orders
                    <br />
                    Internationally
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Home Services
                  <p>Experienced Pros
                    <br />
                    Happiness
                    <br />
                    Guarantee
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Amazon Web Services
                  <p>
                    Scalable Cloud
                    <br />
                    Computing
                    <br />
                    Services
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Audible
                  <p>
                    Listen to Books &
                    <br />
                    Original
                    <br />
                    Audio Performances
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Box Office Mojo
                  <p>
                    Find Movie
                    <br />
                    Box Office Data
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Goodreads
                  <p>
                    Book reviews
                    <br />
                    &
                    <br />
                    recommendations
                  </p>
                </a>
              </td>
            </tr>
            <tr>&nbsp;</tr>
            <tr className="d-flex">
              <td className="navFooterLineItems">
                <a href="/">
                  IMDb
                  <p>
                    Movies, TV
                    <br />
                    & Celebrities
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  IMDbPro
                  <p>
                    Get Info
                    <br />
                    Entertainment
                    <br />
                    Professionals
                    <br />
                    Need
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Kindle Direct Publishing
                  <p>
                    Indie Digital &
                    <br />
                    Print Publishing
                    <br />
                    Made Easy
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Prime Video Direct
                  <p>
                    Video
                    <br />
                    Distribution
                    <br />
                    Made Easy
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Shopbop
                  <p>
                    Designer
                    <br />
                    FashionBrands
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Woot!
                  <p>
                    Deals and
                    <br />
                    Shenanigans
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Zappos
                  <p>
                    Shoes &
                    <br />
                    Clothing
                  </p>
                </a>
              </td>
            </tr>
            <tr>&nbsp;</tr>
            <tr className="d-flex">
              <td className="navFooterLineItems">
                <a href="/">
                  Ring
                  <p>
                    Smart Home
                    <br />
                    Security
                    <br />
                    Systems
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  eero WiFi
                  <p>
                    Stream 4K Video
                    <br />
                    in Every Room
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Blink
                  <p>
                    Smart Security
                    <br />
                    for Every Home
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Neighbors App
                  <p>
                    Real-Time
                    <br />
                    Crime
                    <br />
                    & Safety Alerts
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  Amazon Subscription Boxes
                  <p>
                    Top subscription boxes –
                    <br />
                    right to your door
                  </p>
                </a>
              </td>
              <td className="navFooterLineSpacer"></td>
              <td className="navFooterLineItems">
                <a href="/">
                  PillPack
                  <p>
                    Pharmacy
                    <br />
                    Simplified
                  </p>
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div className="navFooterLineLink d-flex flex-column align-items-center">
          <div>
            <a href="/">Conditions of Use</a>
            <a href="/">Privacy Notice</a>
            <a href="/">Consumer Health Data Privacy Disclosure</a>
            <a href="/">Your Ads Privacy Choices</a>
          </div>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>

    </body>
  );
}

export default HomePage
