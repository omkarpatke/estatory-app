import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="brand-name"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
      <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
      </svg> Estatery</div>
      <div className="nav-links">
         <NavLink className={({ isActive }) => (isActive ? 'rent-link' : 'link')} to='/'>Rent</NavLink>
         <NavLink className='link' to='#'>Buy</NavLink>
         <NavLink className='link' to='#'>Sell</NavLink>
         <NavLink className={({ isActive }) => (isActive ? 'rent-link' : 'link')}        to='/favourite'>Favourite</NavLink>
         <NavLink className='link' to='#'>Resources <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  </svg></NavLink>
      </div>
      <div className="authentication-buttons">
        <div className="btn login">Login</div>
        <div className="btn signup">Sign up</div>
      </div>
    </div>
  )
}

export default Navbar