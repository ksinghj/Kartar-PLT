import { useState, useRef } from 'react'
import styles from './App.module.scss'
import { useRecoilValue } from 'recoil'
import { productsQuery } from '../state/selectors'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import BasketScreen from '../screens/BasketScreen/BasketScreen'
import ShopScreen from '../screens/ShopScreen/ShopScreen'

function App() {
  // render 'Shop' or 'Basket' screen,
  // would use React Router if app required, but
  // for this small tech test this way is fine
  const [screen, setScreen] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const products = useRecoilValue(productsQuery)

  let footerPos
  if (products && containerRef.current) {
    footerPos = window.innerHeight - containerRef.current.getBoundingClientRect().bottom
  }

  return (
    <div className={styles.App} ref={containerRef}>
      <div className={styles.screen}>{screen === 0 ? <ShopScreen /> : <BasketScreen />}</div>
      <footer className={styles.footer} style={{ position: 'absolute', bottom: footerPos }}>
        <BottomNavigation value={screen} onChange={(e, index) => setScreen(index)} showLabels>
          <BottomNavigationAction label="Shop" icon={<HomeIcon />} />
          <BottomNavigationAction label="Basket" icon={<ShoppingBasketIcon />} />
        </BottomNavigation>
      </footer>
    </div>
  )
}

export default App
