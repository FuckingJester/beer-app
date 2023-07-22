import React from 'react'
import styles from './Home.module.scss'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className={styles.home}>
        <h1>Welcome to the Beer Shop</h1>
    </div>
  )
}