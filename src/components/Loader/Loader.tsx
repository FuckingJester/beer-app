import React from 'react'
import styles from './Loader.module.scss'

function Loader(): React.JSX.Element {
  return (
    <div className={styles.loader__container}>
        <div className={styles.loader}></div>
    </div>
    
  )
}

export default Loader