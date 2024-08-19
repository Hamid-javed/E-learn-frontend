import { Link } from "react-router-dom"
import React from 'react'

function Header() {
  return (
    <div className='head flex justify-around mt-2'>
        <div className="logo">
            <img src="" alt="" />
            <div className="name">Learnify</div>
        </div>
        <ul className="flex gap-5">
            <li>Home</li>
            <li>Courses</li>
            <li>Contact Us</li>
        </ul>
        <div className="registeration flex">
            <div className="login">Login / </div>
            <div className="register ml-1"> Register</div>
        </div>
    </div>
  )
}

export default Header