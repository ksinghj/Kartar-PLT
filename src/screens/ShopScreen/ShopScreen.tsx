import { useState, useEffect } from 'react'
import { PRODUCTS, BANNERS } from '../../API/links'
import { product } from '../../types'
import ProductCard from '../../components/ProductCard'

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
    <div>
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
            />
          ))}
      </div>
    </div>
  )
}

export default ShopScreen
