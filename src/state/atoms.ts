import { atom } from 'recoil'
import { product } from '../types'

export const productsState = atom({
  key: 'productsState',
  default: null,
})

export const basketState = atom({
  key: 'basketState',
  default: [] as product[],
})
