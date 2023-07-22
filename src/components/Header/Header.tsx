import React from 'react'
import styles from './Header.module.scss'
import beer from "../../assets/beer.png"
import { Link } from 'react-router-dom'

function Header() : React.JSX.Element{
  return (
    <header className={styles.header}>
        <nav className={styles.header__navbar}>
            <ul>
                <li>
                    <Link to={'/'}>
                      <img src={beer} alt="logo" />
                    </Link>
                </li>
                <li>
                  <Link to={'/products'}>
                    Products
                  </Link> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header