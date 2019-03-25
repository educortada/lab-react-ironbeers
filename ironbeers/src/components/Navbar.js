import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top is-link is-flex-mobile">
        <Link to={'/'} className="button is-link">Home</Link>
      </nav>
    )
  }
}

export default Navbar

