import React, { useEffect, useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const NavBar = () => {

  const navRef  = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        navRef.current.style.backgroundColor = "black";
      }else{
        navRef.current.style.backgroundColor = "transparent";
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar__left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Brows By Language</li>
        </ul>
      </div>
      <div className="navbar__right">
        <img src={search_icon} alt="" className='icons' />
        <p>children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={profile_icon} alt="" className='profile'/>
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar
