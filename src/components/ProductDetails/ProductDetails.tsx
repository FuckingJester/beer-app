import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.scss'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../models'
import axios from 'axios'



function ProductDetails () {
    const { id } = useParams()
    const [product,setProduct] = useState<IProduct>({id : 0})
    console.log(product)
    const fetchProduct =  async (id : string | undefined) => {
        const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        setProduct(response.data[0])
    }
    useEffect(() => {
        fetchProduct(id)
    },[id])

    return (
    <div className={styles.product_details}>
        <div className={styles.product__img}>
            <img src={product.image_url} alt="beer" />
        </div>
        <div className={styles.product__info}>
            <div className={styles.product__top}>
                <div>
                    <h1>{product.name}</h1>
                    <h3>Product code : {product.id}</h3>
                </div>
                <h2>{product.tagline}</h2>    
            </div>
            <div className={styles.product__content}>
                <p>{product.description}</p>
                <h2>Abv : {product.abv}</h2>
                <h2>Ibu : {product.ibu}</h2>
                <h2>Ph : {product.ph}</h2>
            </div>
            <div className={styles.products__tips}>
                <h2>Tips</h2>
                <p>{product.brewers_tips}</p>
            </div>
        </div>  
    </div>
    )
}

export default ProductDetails