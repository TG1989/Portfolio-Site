import { useState } from 'react';
import MobileNav from './MobileNav/MobileNav';
import './Navbar.css'
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>

      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src="./assets/logo.svg" alt="logo" />
          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>

            <li>
              <a className='menu-item'>Skills</a>
            </li>

            <li>
              <a className='menu-item'>Work Experience</a>
            </li>

            <li>
              <a className='menu-item'>Contact Me</a>
            </li>

            <button className='contact-btn' onClick={() => { }}>
              Hire Me
            </button>

          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span>
              {openMenu ? <IoClose /> : <FaAlignJustify />}
            </span>
          </button>


        </div>
      </nav>

    </>
  )
}

export default Navbar