import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav--wrapper">
      <div className="left-side--nav">
        <span>Book recommendation generator</span>
      </div>
      <div className="right-side--nav">
        <Link style={{ color: '#1c1c20' }} to="/"><button>HOME</button></Link>
        <Link style={{ color: '#1c1c20' }} to="/about"><button>ABOUT</button></Link>
      </div>
    </div>
  )
}

export default Nav