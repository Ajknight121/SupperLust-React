import React from 'react'
import { Link } from 'react-router-dom'

const Pantry = () => {
  return (
    <div>
        <div>
            <Link to="/explore">
                Explore
            </Link>
        </div>
        <div>Pantry</div>
    </div>
  )
}

export default Pantry