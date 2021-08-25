import { atom } from 'recoil'

export const productsState = atom({
  key: 'productsState',
  default: null,
})

export const basketState = atom({
  key: 'basketState',
  default: [],
})
