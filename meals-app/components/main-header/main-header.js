import React from 'react'
import Logo from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'
import Link from 'next/link'

const MainHeader = () => {
 
  return (
    <>  
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
        <Image src={Logo.src} width={Logo.width} height={Logo.height} priority alt="A plate with food on it" />

        Next Level Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li><NavLink href={"/meals"}>Meals</NavLink></li>
                <li><NavLink href={"/community"}>Foodies Community</NavLink></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default MainHeader