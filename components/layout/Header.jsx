import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '/styles/Header.module.css'

const Header = () => {
    

    const navLinks = [
        { href:'/', value:'home' },
        { href:'/sobre', value:'sobre' },
    ]
    return <header>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/images/pokeball.png' width='30' height='30' />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.menuList}>
                {navLinks.map( link => {
                    return <li key={link.value}>
                        <Link href={link.href}>
                            <a>{link.value}</a>
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    </header>    
}

export default Header