import React, { FC , MouseEvent} from 'react'
import styles from './Product.module.scss'
import { IProduct } from '../../models'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import useProductStore from '../../store/store';

interface Props {
    product : IProduct
}

const Product : FC<Props> = ({product}) => {
  const selectProduct = useProductStore(state => state.selectProduct)
  const deselectProduct = useProductStore(state => state.deselectProduct)
  const selectedProducts = useProductStore(state => state.selectedProducts)
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce : true
  });
  const isSelected = selectedProducts.includes(product.id)
  const selectedHandler = (event : MouseEvent ) => {
    event.preventDefault()
    isSelected ? deselectProduct(product.id) : selectProduct(product.id);
  }
  return (
    <div onContextMenu={selectedHandler} ref={ref} className={isSelected ? `${styles.product} ${styles.product__selected}` : styles.product }>
      {inView ? (
        <>
          <Link to={`/products/${product.id}`}>
            <img
              className={styles.product__img}
              src={product.image_url}
              alt="img"
            />
          </Link>
          <div className={styles.product__bottom}>
            <h1 className={styles.product__text}>{product.name}</h1>
            <h2 className={styles.product__tagline}>{product.tagline}</h2>
            <h3 className={styles.product__subtext}>Abv : {product.abv}%</h3>
            <h3 className={styles.product__subtext}>Ibu : {product.ibu}</h3>
          </div>              
        </>
      ) : (
        <>
          <div className={styles.product__img__loading}></div>
          <div className={styles.product__text__loading}></div>
        </>
      )}
    </div>
  );
}

export default Product