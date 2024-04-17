import React from 'react'
import { Link } from 'react-router-dom'

const Pantry = () => {
  return (
    <div>
        <div>
            <Link to="/explore">
                Explore
            </Link>
            <br/>
            <Link to="/quickbites">
                Quick Bites
            </Link>
            <br/>
            <Link to="/restaurant">
                Restaurant view
            </Link>
            <br/>
            <Link to="/cart">
                Checkout View
            </Link>
            <Link to="/panel">
                Panel
            </Link>
        </div>
        <div>Pantry</div>
    </div>
  )
}

export default Pantry