import { createContext, useReducer } from 'react'

export const BasketProvider = ({ children }) => {
  const [basketContents, dispatch] = useReducer(basketReducer, [])

  function basketReducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state, action.payload]
      // not going to spend any more time on this now, but
      // one thing i have struggled with here is removing only
      // the 1st instance of the product from the basket, right now
      // removing for example id 1 will remove all products with id 1
      // frustrating cos i am sure i've done this before
      case 'remove':
        const newState = state.filter(item => {
          return item.id !== action.payload.id
        })
        return newState
      default:
        throw new Error()
    }
  }

  return <BasketContext.Provider value={{ basketContents, dispatch }}>{children}</BasketContext.Provider>
}

export const BasketContext = createContext()

export default BasketProvider
