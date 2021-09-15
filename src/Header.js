import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
function Header() {
    const user = useSelector(state => state.user)
    console.log(user)
    return (
        <div className="header">
            <div className="header_nav">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    {
                        user ? <><li><a> Hello {user.user.name}</a></li> <i class="fas fa-user"></i></> :
                            <><Link to="/login"> <li>Login</li></Link><Link to="/signup"><li>Sign Up</li></Link>
                                <i class="fas fa-user"></i>
                            </>
                    }
                </ul>
            </div>
        </div >
    )
}

export default Header



