import React from 'react'
import "../styles/pic.css"
import axios from "axios"

function Image(props) {
  const { elmnt } = props

  const Delete = () => {
    axios.delete(`https://server-nine-eosin.vercel.ap/images/${elmnt._id}/delete`).then((res) => {
      window.alert("Image has been successfully deleted !!")
      window.open("/", "_self")
    })
  }

  return (
    <div className='pic'>
      <div className="picins">
        <div className="leftins">
          <div className="picture" style={{ backgroundImage: `url(${elmnt.imgURL})` }}></div>
        </div>
        <div className="rightins">
          <div className="data">
            <div className="img">
              <div className='h'>Name</div>
              <div className='d'>{elmnt.imgName}</div>
            </div>
            <div className="img">
              <div className='h'>URL</div>
              <div className='d'>{elmnt.imgURL}</div>
            </div>
            <div className="img">
              <div className='h'>Deity</div>
              <div className='d'>{elmnt.Deity}</div>
            </div>
            <div className="img">
              <div className='h'>Used By</div>
              <div className='d'>{elmnt.usedBy}</div>
            </div>
            <div className="img">
              <div className='h'>Description</div>
              <div className='d'>{elmnt.imgDescription}</div>
            </div>
          </div>
          <div className="editor">
            <div className="delete nxtbtn" onClick={() => Delete()}>DELETE</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image