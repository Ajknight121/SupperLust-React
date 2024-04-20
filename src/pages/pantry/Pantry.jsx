import React from 'react'
import { Link } from 'react-router-dom'
import "./pantry.css"



const Pantry = () => {
  return (
    <div className='pantry'>
      <div className='pantry-nav'>
        <Link to="/explore">
          Explore
        </Link>
        <br />
        <Link to="/quickbites">
          Quick Bites
        </Link>
        <br />
        <Link to="/restaurant">
          Restaurant view
        </Link>
        <br />
        <Link to="/cart">
          Checkout View
        </Link>
        <br />
        <Link to="/panel">
          Panel
        </Link>
      </div>
      <div>Pantry</div>
    </div>
  )
}

export default Pantry