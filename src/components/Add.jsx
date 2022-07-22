import React from 'react'

function Add() {
  return (
    <div className='loginsignup'>
        <div className="main">
            <div className='up'>Add New Image</div>
            <div className='down'>
                <input className='name' placeholder='name'/>
                <div className="empty"></div>
                <input className='email' placeholder='email'/>
                <div className="empty"></div>
                <input className='password' placeholder='password' type="password"/>
                <div className="emptyl"></div>
                <div className="btn">Signup</div>
            </div>
        </div>
    </div>
  )
}

export default Add