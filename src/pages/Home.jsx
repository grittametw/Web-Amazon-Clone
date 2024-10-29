import { useState } from 'react'
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

  return (
    <body>
      <div expand="lg" className="navBar navbar-dark d-flex justify-content-center">
        <div className="navBox d-flex justify-content-between align-items-center">
          <a href="/" className="location"><img src="amazon.png" alt="amazon" className="logo" /></a>
          <a href="#action2" className="location">Deliver to <h6>Thailand</h6></a>

          <div className="searchBar d-flex">
            <button variant="outline-success" className="filterButton">All
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

          <a href="#action2" className="language">EN
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </a>
          <div
            className="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#action3" className="lists">Hello, sign in Account & Lists
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </a>
            <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
              <DropdownMenu />
            </div>
          </div>
          <a href="#action1" className="returnOrders">Returns <h6>& Orders</h6></a>
          <a href="/cart" className="cart">Cart</a>
        </div>
      </div>
    </body>
  );
}

export default HomePage
