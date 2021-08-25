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

const ProductCard = (props: product) => {
  const classes = useStyles()
  const [basketContents, setBasketContents] = useRecoilState(basketState)

  const handleAddToBasket = () => {
    const newState = [...basketContents]
    const itemFound = newState.findIndex(item => item.id === props.id)
    // if item is already there, just replace with a clone, with 1 more quantity
    // (can't just quantity++ as read-only)
    if (itemFound !== -1) {
      let clone = Object.assign({}, newState[itemFound])
      clone.quantity++
      newState[itemFound] = clone
    }
    itemFound !== -1 ? setBasketContents(newState) : setBasketContents([...basketContents, props])
  }

  interface removeBasketOptions {
    remove?: Boolean
  }

  const handleRemoveFromBasket = (options?: removeBasketOptions) => {
    const newState = [...basketContents]
    const itemFound = newState.findIndex(item => item.id === props.id)
    // if only 1 left, or remove option specified
    if (newState[itemFound].quantity === 1 || (options && options.remove)) {
      newState.splice(itemFound, 1)
    } else {
      // decrease quantity by replacing the object with a clone, but with a reduced quantity
      // (can't just quantity-- as read-only)
      let clone = Object.assign({}, newState[itemFound])
      clone.quantity--
      newState[itemFound] = clone
    }
    setBasketContents(newState)
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
            <Button size="small" color="primary" onClick={() => handleRemoveFromBasket({ remove: true })}>
              Remove from basket
            </Button>
            <div className={styles.edit}>
              <label htmlFor="quantity">Edit quantity: </label>
              <div className={styles.quantity}>
                <QuantityButton type="increment" handleClick={handleAddToBasket} />
                <p className={styles.quantityAmount}>{props.quantity}</p>
                <QuantityButton type="decrement" handleClick={handleRemoveFromBasket} />
              </div>
            </div>
          </>
        )}
      </CardActions>
    </Card>
  )
}

export default ProductCard
