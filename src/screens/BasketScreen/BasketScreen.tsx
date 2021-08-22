import { useContext, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { BasketContext } from '../../state/BasketProvider'
import { product } from '../../types'

const BasketScreen = () => {
  const { basketContents } = useContext(BasketContext)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <h1>BasketScreen</h1>
      {basketContents.map((item: product) => {
        return (
          <ProductCard
            name={item.name}
            id={item.id}
            price={item.price}
            img={item.img}
            colour={item.colour}
            isBasket={true}
            // quantity={item.quantity}
          />
        )
      })}
    </div>
  )
}

export default BasketScreen
