import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import BottomNav from '../components/BottomNav'
import { PRODUCTS } from './API/links'

interface product {
  id: number
  colour: string
  name: string
  price: number
  img: string
}

function App() {
  const [products, setProducts] = useState<product[]>()

  useEffect(() => {
    ;(async () => {
      const res = await fetch(PRODUCTS)
      const data = await res.json()
      console.log(data)
      setProducts(data)
    })()
  }, [])

  return (
    <div className={styles.App}>
      <div>{products && products.map((product, index) => <p key={index}>{product.name}</p>)}</div>
      <footer className={styles.footer}>
        <BottomNav />
      </footer>
    </div>
  )
}

export default App
