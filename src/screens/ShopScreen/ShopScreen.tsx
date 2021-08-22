import { useState, useEffect } from 'react'
import { PRODUCTS } from '../../API/links'
import { product } from '../../types'

const ShopScreen = () => {
  const [products, setProducts] = useState<product[]>()

  // get the products data on mount, and store in state
  useEffect(() => {
    ;(async () => {
      const res = await fetch(PRODUCTS)
      const data = await res.json()
      console.log(data)
      setProducts(data)
    })()
  }, [])

  return (
    <div>
      <h1>ShopScreen</h1>
      <div>{products && products.map((product, index) => <p key={index}>{product.name}</p>)}</div>
    </div>
  )
}

export default ShopScreen
