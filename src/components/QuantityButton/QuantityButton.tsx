import { useContext } from 'react'

import { BasketContext } from '../../state/BasketProvider'
import { product } from '../../types'

interface IProps {
  type: string
  product: product
}

const QuantityButton = ({ type, product }: IProps) => {
  const { dispatch } = useContext(BasketContext)

  const symbol = type === 'increment' ? '+' : '-'

  const handleClick = () => {
    switch (type) {
      case 'increment':
        dispatch({ type: 'incrementQuantity' })
        break
      case 'decrement':
        dispatch({ type: 'decrementQuantity' })
        break
      default:
        break
    }
  }

  return <button onClick={handleClick}>{symbol}</button>
}

export default QuantityButton
