import React from 'react'
import "../styles/oneimage.css"

function OneImage(props) {
    const { img } = props
    return (
        <div className='oneimage' style={{ backgroundImage: `url(${img.imgURL})` }} onClick={() => {
            window.open(`/${img.slug}`, "_self")
        }}></div>
    )
}

export default OneImage