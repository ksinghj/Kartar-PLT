import { useContext } from 'react'
// import styles from './ProductCard.module.scss'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { product } from '../types'
import { BasketContext } from '../state/BasketProvider'

const useStyles = makeStyles({
  container: {
    marginBottom: 20,
  },
})

const ProductCard = (props: product, isBasket: boolean) => {
  const classes = useStyles()
  const { dispatch } = useContext(BasketContext)

  const handleAddToBasket = () => {
    console.log(props.id)
    dispatch({ type: 'add', payload: props })
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
        <Button size="small" color="primary" onClick={handleAddToBasket}>
          Add to basket
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
