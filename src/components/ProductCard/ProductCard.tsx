import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
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
import QuantityButton from '../QuantityButton/QuantityButton'
import { basketState } from '../../state/atoms'

const useStyles = makeStyles({
  container: {
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 30,
  },
})

// TODO: remove single instance from basket
// TODO: edit individual quantities (state)

const ProductCard = (props: product) => {
  const classes = useStyles()
  const [quantity, setQuantity] = useState(1)
  const [basketContents, setBasketContents] = useRecoilState(basketState)

  const handleAddToBasket = () => {
    setBasketContents([...basketContents, props])
  }

  const handleRemoveFromBasket = () => {
    const newState = [...basketContents]
    const indexToRemove = newState.findIndex(item => item.id === props.id)
    newState.splice(indexToRemove, 1)
    setBasketContents(newState)
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
