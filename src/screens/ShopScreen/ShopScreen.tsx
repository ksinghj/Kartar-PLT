import { useState, useEffect } from 'react'
import { PRODUCTS, BANNERS } from '../../API/links'
import { product } from '../../types'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './ShopScreen.module.scss'

const ShopScreen = () => {
  const [products, setProducts] = useState<product[]>()
  const [banner, setBanner] = useState<string>()

  // get the products data on mount, and store in state
  useEffect(() => {
    ;(async () => {
      const res = await fetch(PRODUCTS)
      const data = await res.json()
      setProducts(data)
    })()
    ;(async () => {
      const res = await fetch(BANNERS)
      const data = await res.json()
      setBanner(data.main)
    })()
  }, [])

  return (
    <div className={styles.container}>
      {!products && <h5>Products loading...</h5>}
      <h4>{banner}</h4>
      <div>
        {products &&
          products.map((product, index) => (
            <ProductCard
              name={product.name}
              img={product.img}
              id={product.id}
              price={product.price}
              colour={product.colour}
              key={index}
            />
          ))}
      </div>
    </div>
  )
}

export default ShopScreen
