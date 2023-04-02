import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import { navLinks } from '../constants'
import {hamburger, close, chevron} from '../assets'

const Navbar = ({active, setActive, navColors, setNavColors}) => {
  const [toggle, setToggle ] = useState(false)

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setNavColors((prevColors) => ({
      ...prevColors,
      [nav.title]: nav.color,
    }));
  };

  return (
      <div className='w-full flex sm:flex-col md:flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto'>
        <NavLink
          to='/'
          className='flex sm:pb-2 lg:pb-0 items-center gap-2'
          onClick={() => {
            setActive(navLinks[0].title); 
            window.scrollTo(0, 0)
          }}
        >
          <p className='flex text-white text-[28px] font-bold cursor-pointer tittle'>THE PLANETS</p>
        </NavLink>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id} 
              style={{ textDecorationColor: navColors[nav.title] }}
              className={`text-white text-[18px] sm:text-[11px] lg:text-[18px] font-medium cursor-pointer ${
                active === nav.title ? 'overline decoration-4' : ''
              }`}
              onClick={() => handleNavClick(nav)}
            >
              <NavLink
                to={`/${nav.id}`}
                className='nav-link'
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
           src={toggle ? close : hamburger}
           alt='menu'
           className='w-[28px] h-[28px] object-contain cursor-pointer'
           onClick={() => setToggle(!toggle)}   
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#070724] absolute top-20 right-0 mx-4 my-2 min-w-full z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4 w-full'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                style={{ textDecorationColor: navColors[nav.title] }}
                className={`text-white text-[16px] font-medium cursor-pointer border-b w-full${
                  active === nav.title ? 'overline decoration-4' : ''
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  handleNavClick(nav)
                }}
              >
                <div className='flex items-center gap-2 w-full'>
                  <div style={{width: '16px', height: '16px', borderRadius: '50%', backgroundColor: nav.color}}></div>
                  <a className='nav-link' href={`#${nav.id}`}>{nav.title}</a>
                  <img
                    src={chevron}
                    alt='chevron'
                    className='w-[10px] h-[10px] object-none object-right'  
                  />
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Navbar
