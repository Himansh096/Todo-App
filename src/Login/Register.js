import React, { useState } from 'react'
import { useHistory } from 'react-router'
import "./Login.css"
function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [pword, setPword] = useState("")
    const history = useHistory()

    const RegisterHandler = async (e) => {
        e.preventDefault()


        const userLogin = {
            name: name,
            email: email,
            phone: phone,
            password: pword

        }
        console.log(userLogin)
        const response = await fetch('http://localhost:2000/customer/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userLogin)
        })

        const data = await response.json()
        console.log(data)
        history.push('/home')
        setName("")
        setEmail("")
        setPhone("")
        setPword("")

    }
    return (
        <div className="login">
            <form onSubmit={RegisterHandler}>
                <div className="details">
                    <label>Enter Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name"></input>
                </div>
                <div className="details">
                    <label>Enter Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"></input>
                </div>
                <div className="details">
                    <label>Enter Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Enter Phone Number"></input>
                </div>
                <div className="details">
                    <label>Enter Password</label>
                    <input value={pword} onChange={(e) => setPword(e.target.value)} type="password" placeholder="Enter Password"></input>
                </div>
                <div className="details_btn">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div >
    )
}


export default Register
