import { selector } from 'recoil'
import { PRODUCTS } from '../API/links'

export const productsQuery = selector({
  key: 'Products',
  get: async () => {
    const res = await fetch(PRODUCTS)
    const data = await res.json()
    return data
  },
})
