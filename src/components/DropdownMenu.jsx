import React from "react"
import Button from 'react-bootstrap/Button'
import '../css/DropdownMenu.css'

const DropdownMenu = () => {
  return (
    <div className="container">
      <Button className="signInButton">Sign in</Button>
      <p>New customer?<a href="">Start here.</a></p>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </div>
  )
}

export default DropdownMenu;