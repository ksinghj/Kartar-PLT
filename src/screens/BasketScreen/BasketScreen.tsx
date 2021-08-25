import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { basketState } from '../../state/atoms'
import ProductCard from '../../components/ProductCard/ProductCard'
import { product } from '../../types'
import styles from './BasketScreen.module.scss'

const BasketScreen = () => {
  const basketContents = useRecoilValue(basketState)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      <h1>Basket</h1>
      {!basketContents.length && <h3>Add some items to the basket!</h3>}
      {basketContents.map((item: product, index: number) => {
        return (
          <ProductCard
            name={item.name}
            id={item.id}
            price={item.price}
            img={item.img}
            colour={item.colour}
            isBasket={true}
            quantity={item.quantity}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default BasketScreen
