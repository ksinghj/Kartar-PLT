import { useContext, useState, useEffect } from 'react'
import styles from './ProductCard.module.scss'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { product } from '../../types'
import { BasketContext } from '../../state/BasketProvider'
import QuantityButton from '../QuantityButton/QuantityButton'

const useStyles = makeStyles({
  container: {
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 30,
  },
})

const ProductCard = (props: product) => {
  const classes = useStyles()
  const { dispatch } = useContext(BasketContext)
  const [quantity, setQuantity] = useState(1)

  const handleAddToBasket = () => {
    const payload = { ...props, quantity: quantity }
    dispatch({ type: 'add', payload: payload })
  }

  const handleRemoveFromBasket = () => {
    const payload = { ...props, quantity: quantity }
    dispatch({ type: 'remove', payload: payload })
  }

  useEffect(() => {
    if (quantity < 1) handleRemoveFromBasket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity])

  const handleClick = (type: string) => {
    switch (type) {
      case 'increment':
        setQuantity(quantity + 1)
        break
      case 'decrement':
        if (quantity === 1) {
          handleRemoveFromBasket()
        } else {
          setQuantity(quantity - 1)
        }
        break
      default:
        break
    }
  }

  return (
    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            £{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!props.isBasket ? (
          <Button size="small" color="primary" onClick={handleAddToBasket}>
            Add to basket
          </Button>
        ) : (
          <>
            <Button size="small" color="primary" onClick={handleRemoveFromBasket}>
              Remove from basket
            </Button>
            <div className={styles.edit}>
              <label htmlFor="quantity">Edit quantity: </label>
              <div className={styles.quantity}>
                <QuantityButton type="increment" handleClick={() => handleClick('increment')} />
                <p className={styles.quantityAmount}>{quantity}</p>
                <QuantityButton type="decrement" handleClick={() => handleClick('decrement')} />
              </div>
            </div>
          </>
        )}
      </CardActions>
    </Card>
  )
}

export default ProductCard
