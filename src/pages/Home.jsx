import { useState } from 'react'
import DropdownMenu from '../components/DropdownMenu'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
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
    <Navbar expand="lg" className="navbar navbar-dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="amazon.png" alt="amazon" className="logo ms-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mt-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button variant="outline-success">Deliver to Thailand</Button>
            <Form className="d-flex">
              <button variant="outline-success" className="filterButton">All</button>
              <input
                type="search"
                placeholder="Search"
                className="searchBar"
                aria-label="Search" />
              <button variant="outline-success" className="searchButton">Search</button>
            </Form>
            <Nav.Link href="#action2">EN</Nav.Link>
            <div
              className="menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button>Dropdown Menu</button>
              <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
                <DropdownMenu />
              </div>
            </div>

            <Nav.Link href="#action1">Returns & Orders</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomePage
