import React, { useState } from 'react'

import {
   Link
} from 'react-router-dom'

import { logout, metaHelper } from '../Helpers'

import { NavbarRoutes } from "../Routes";

export default function Navbar(props) {

   let [navbar, setNavbar] = useState('')

   function toggleMenu() {
      if (navbar == '') setNavbar(' active')
      else setNavbar('')
   }

   function renderRoutes() {
      return (
         <React.Fragment>
            {NavbarRoutes.map((route, index) => {
               if (metaHelper(route.meta)) return <Link key={index} to={route.path}>{route.title}</Link>
            })}
         </React.Fragment>
      )
   }

   return (
      <div className={`navbar${navbar}`}>
         <div className="head">Logo</div>

         <div className='links'>
            {renderRoutes()}
         </div>

         <div className="menu">
            {state.user ?
               (<React.Fragment>
                  <span>{state.user.name}</span> / <button className="primary" onClick={logout}>Logout</button>
               </React.Fragment>) :
               (<React.Fragment>
                  <Link to='/signin'>Sign in</Link><br />
               </React.Fragment>)
            }
         </div>

         <div className="toggle" onClick={toggleMenu}>
            =
         </div>
      </div >
   )

}
