import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/TaskActions'
import axios from 'axios'
import "./Login.css"
import { useHistory } from 'react-router'
function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [pword, setPword] = useState("")

    const signup = () => {
        history.push("/signup")
    }
    const loginHandler = async (e) => {
        e.preventDefault()
        const userLogin = {
            email: email,
            password: pword
        }
        console.log(userLogin)

        const response = await fetch("http://localhost:2000/customer/login",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userLogin)
            })
        const data = await response.json()
        console.log(data)

        dispatch(setUser(data))
        history.push("/home")
        setEmail("")
        setPword("")

    }
    return (
        <div className="login">

            <form onSubmit={loginHandler}>
                <div className="details">
                    <label>Enter Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"></input>
                </div>
                <div className="details">
                    <label>Enter Password</label>
                    <input value={pword} onChange={(e) => setPword(e.target.value)} type="password" placeholder="Enter Password"></input>
                </div>
                <div className="details_btn">
                    <button type="submit">Login</button>
                    <button type="submit" onClick={signup} >Sign Up</button>
                </div>
            </form>


        </div >
    )
}
export default Login

