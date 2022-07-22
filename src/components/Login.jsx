import React from 'react'
import { useState } from "react"
import axios from "axios"

function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Auth = () => {
        const payload = { name, email, password }
        axios.post("https://server-nine-eosin.vercel.ap/users/login", payload).then((res) => {
            console.log(res)
            if (res.data.status === "success") {
                window.open("/", "_self")
            }
            else {
                window.alert(`${res.data.message}`)
            }
        })

    }


    return (
        <div className='loginsignup'>
            <div className="main">
                <div className='up'>
                    <div className="headins">Login</div>
                    <div className="detailsins">
                        Name - Test User <br />
                        Email - testuser@gmail.com <br />
                        Password - hackerearth <br />
                        (Other Login Credentials won't work)
                    </div>
                </div>
                <div className='down'>
                    <input className='name' placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <div className="empty"></div>
                    <input className='email' placeholder="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="empty"></div>
                    <input className='email' placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="empty"></div>
                    <div className="btn" onClick={Auth}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Login