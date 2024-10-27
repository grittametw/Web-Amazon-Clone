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
    <div expand="lg" className="navbar navbar-dark d-flex justify-content-between">
      <a href="/" className="location"><img src="amazon.png" alt="amazon" className="logo" /></a>
      <a href="#action2" className="location">Deliver to Thailand</a>

      <div className="searchBar d-flex">
      <button variant="outline-success" className="filterButton">All
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>
      <input
        type="search"
        placeholder="Search"
        className="searchInput"
        aria-label="Search" />
      <button variant="outline-success" className="searchButton">Search</button>
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
      <a href="#action1" className="returnOrders">Returns & Orders</a>
      <a href="/cart" className="cart">Cart</a>
    </div>
  );
}

export default HomePage
