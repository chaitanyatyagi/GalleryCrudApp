import React from 'react'
import "../styles/header.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

function Header() {

  const [imgName, setImgName] = useState("")
  // const [value, setValue] = useState([])

  const promise = async () => {
    let payload = { imgName }
    const res = await axios.post("https://gallerycrudapp2.herokuapp.com/images/search", payload).then((res) => {
      return res.data.data.searchedImage
    }).catch((err) => {
      window.alert("No such Image is available !")
      window.open("/", "_self")
    })

  }
  const search = async () => {
    const res = await promise()
    window.open(`/${res[0].slug}`)
  }

  const logout = () => {
    axios.get("https://gallerycrudapp2.herokuapp.com/users/logout")
  }

  return (
    <div className='header'>
      <Link to='/' className="gallery" style={{ color: 'inherit', textDecoration: 'inherit' }}>Home</Link>
      <div className="blank"></div>
      <div className="search">
        <input type="text" className="searchins" placeholder='Search By Name' value={imgName} onChange={(e) => setImgName(e.target.value)} />
      </div>
      <div className="signtext" onClick={search}>Search</div>
      <Link to="/login" className="logintext" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={logout}>Logout</Link>

    </div>
  )
}

export default Header