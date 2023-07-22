import React , { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../Product/Product';
import styles from './ProductList.module.scss'
import useProductStore from '../../store/store';


const ProductList = () : React.JSX.Element => {
    const products = useProductStore(state => state.products)
    const setProducts = useProductStore(state => state.setProducts)
    const selectedProducts = useProductStore(state => state.selectedProducts)
    const deleteSelectedProducts = useProductStore(state => state.deleteSelectedProducts)
    console.log(selectedProducts)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [fetching,setFetching] = useState<boolean>(true)
    const [perPage,setPerPage] = useState<number>(15)
    console.log(products)
    useEffect(() => {
      if(fetching){
        axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPage}`)
        .then(response => {
          setPerPage(prev => prev + 5)
          if(perPage === 25){
            setCurrentPage(prev => prev + 1)
            setPerPage(15)
          }
          setProducts(response.data)
        })
        .catch(err => alert(err))
        .finally(() => {
          setFetching(false)
        })
      }   
    },[fetching,perPage])

    useEffect(() => {
      document.addEventListener('scroll',scrollHandler)
      return function () {
        document.removeEventListener('scroll',scrollHandler)
      }
    }, [])

    const scrollHandler = (e : any) => {
      if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
        setFetching(true)
      }
    }
    return (
        <main>
          <h1 className={styles.title}>Products</h1>
          <div className={styles.products}>
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
          {
            selectedProducts.length !== 0  &&
            <div className={styles.delete}>
              <h1>Selected {selectedProducts.length} products</h1>
              <button onClick={deleteSelectedProducts} className={styles.delete__btn}>Delete</button>
            </div> 
          }         
        </main>
    );
}

export default ProductList