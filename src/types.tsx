export interface product {
  id: number
  colour: string
  name: string
  price: number
  img: string
  isBasket?: boolean // took a shortcut here :/
  quantity?: number
}
