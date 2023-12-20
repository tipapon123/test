import React from 'react'
import Head from 'next/head'
const Header = ({navmenus}) => {
  return (
   <>
  {navmenus.map((navmenu,id)=>(
    <>
    <meta key={id} name="google-site-verification" content={navmenu.attributes.google} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </>
    ))}
 </>
  )
}

export default Header