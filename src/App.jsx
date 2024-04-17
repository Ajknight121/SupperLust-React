import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pantry from './pages/Pantry'
import Explore from './pages/explore/Explore'
import QuickBites from './pages/QuickBites'
import Restaurant from './pages/Restaurant'
import Cart from './pages/Cart'
import PanelPopup from './RatingPanel'
function App() {

  return (
    <div className='app'>
    <Router>
        {/* This defines all pages (path) of the website 
            and the component that represents the page
            To navigate between pages add a <Link> component inside the component
              example in Pantry page*/}
        <Routes>
          <Route path="/" element={<Pantry />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/quickbites" element={<QuickBites />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/panel" element={<PanelPopup />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
