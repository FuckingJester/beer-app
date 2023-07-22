import React, { lazy,Suspense }  from 'react'
import './App.css'
import Layout from './components/Layout/Layout';
import { Routes, Route } from "react-router-dom";
import Loader from './components/Loader/Loader';

const ProductList = lazy(() => import('./components/ProductsList/ProductList'))
const ProductDetails = lazy(() => import('./components/ProductDetails/ProductDetails'))
const Home = lazy(() => import('./components/Home/Home'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/products'} element={<ProductList/>} />
          <Route path={'/products/:id'} element={<ProductDetails/>} />
        </Routes>
      </Suspense>
    </Layout>
      
  )
}

export default App
