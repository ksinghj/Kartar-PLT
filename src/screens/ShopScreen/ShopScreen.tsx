import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { productsQuery } from '../../state/selectors'
import { BANNERS } from '../../API/links'
import { product } from '../../types'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './ShopScreen.module.scss'

const ShopScreen = () => {
  const products = useRecoilValue(productsQuery)
  const [banner, setBanner] = useState<string>()

  // get the products data on mount, and store in state
  useEffect(() => {
    ;(async () => {
      const res = await fetch(BANNERS)
      const data = await res.json()
      setBanner(data.main)
    })()
  }, [])

  return (
    <div className={styles.container}>
      {!products && <h5>Products loading...</h5>}
      <div>
        {/* 
        the banner does load slower than products as we fetch it every render, 
        but serves as a demo of another way to get data 
        (rather than use state management like Recoil) vvv
        */}
        <h4>{banner}</h4>
        {products &&
          products.map((product: product, index: number) => (
            <ProductCard
              name={product.name}
              img={product.img}
              id={product.id}
              price={product.price}
              colour={product.colour}
              key={index}
              quantity={1}
            />
          ))}
      </div>
    </div>
  )
}

export default ShopScreen
