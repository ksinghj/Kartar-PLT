import { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels>
      <BottomNavigationAction label="Shop" icon={<HomeIcon />} />
      <BottomNavigationAction label="Basket" icon={<ShoppingBasketIcon />} />
    </BottomNavigation>
  )
}
