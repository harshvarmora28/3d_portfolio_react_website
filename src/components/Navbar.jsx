import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("harsh_varmora_resume.pdf").then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'harsh_varmora_resume.pdf';
            alink.click();
        })
    })
}

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-lg`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain rounded-full mr-3'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Harsh &nbsp; <span className='sm:block hidden'>Varmora</span></p>
        </Link>
        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          onButtonClick();
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <p className='text-white text-[18px] font-medium cursor-pointer flex'>Download Resume &nbsp; </p>
        </Link>
          {navLinks.map((Link) => (
            <li key={Link.id} className={`${
              active === Link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive(Link.title)
            }} >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          <Link to="/" className='flex items-center gap-2' onClick={() => {
          onButtonClick();
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <p className='text-white text-[18px] font-medium cursor-pointer flex'>Download Resume &nbsp; </p>
        </Link>
          {navLinks.map((Link) => (
            <li key={Link.id} className={`${
              active === Link.title
              ? "text-white"
              : "text-secondary"
            } font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={() => {
              setToggle(!toggle);
              setActive(Link.title);
            }} >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar