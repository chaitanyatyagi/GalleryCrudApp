import React from 'react'
import Header from './Header'
import "../styles/homepage.css"

function HomePage() {
  const open = () => {
    window.open("/mainpage", "_self")
  }
  return (
    <div>
      <div className='homepage'>
        <div className="homemain">
          <Header />
          <div className="homemaindown">
            <div className="left">
              <div className="head">Legendary Armaments - Epic of Mahabharat</div>
              <div className="btnnew" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={open}>Explore</div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage