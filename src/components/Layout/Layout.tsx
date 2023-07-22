import React, { PropsWithChildren } from 'react'
import Header from '../Header/Header'



type ChildrenProps = {

}

export default function Layout({children}: PropsWithChildren<ChildrenProps>) {
  return (
    <div className='container'>
        <Header/>
        {children}
    </div>
  )
}