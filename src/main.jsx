import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
// import Scroll from './pages/parallax/ScrollParallax.jsx'
// import MouseScroll from './pages/parallax/MouseParallax.jsx'
// import StyledCardExample from './pages/card/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StyledCardExample /> */}
    {/* <Scroll /> */}
    {/* <MouseScroll /> */}
    <Home />
  </StrictMode>,
)
