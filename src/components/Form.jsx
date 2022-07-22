import React from 'react'
import "../styles/loginsignup.css"
import { useState } from "react"
import axios from "axios"

function Form() {

  const [imgName, setImgName] = useState("")
  const [imgDescription, setImgDescription] = useState("")
  const [imgURL, setImgURL] = useState("")
  const [Deity, setDeity] = useState("")
  const [usedBy, setUsedBy] = useState("")

  const Edited = async () => {
    let payload = { imgName, imgURL, Deity, usedBy, imgDescription }
    console.log(payload)
    await axios.post("http://127.0.0.1:4000/images/new-image", payload).then((res) => {
      window.alert("Image added")
    }).catch((err) => {
      window.alert("Insufficient details ! Image is not added !")
    })
    window.open("/", "_self")
  }

  return (
    <div className='loginsignup'>
      <div className="main">
        <div className='up'>POST NEW IMAGE</div>
        <div className='down'>
          <input className='name' placeholder='Weapon Name' value={imgName} onChange={(e) => setImgName(e.target.value)} />
          <div className="empty"></div>
          <input className='email' placeholder='Image Description' value={imgDescription} onChange={(e) => setImgDescription(e.target.value)} />
          <div className="empty"></div>
          <input className='email' placeholder='Used By' value={imgURL} onChange={(e) => setImgURL(e.target.value)} />
          <div className="empty"></div>
          <input className='email' placeholder='Deity' value={Deity} onChange={(e) => setDeity(e.target.value)} />
          <div className="empty"></div>
          <input className='email' placeholder='Image URL' value={usedBy} onChange={(e) => setUsedBy(e.target.value)} />
          <div className="emptyl"></div>
          <div className="btn" onClick={Edited}>Done</div>
        </div>
      </div>
    </div>
  )
}

export default Form