import { createContext, useReducer } from 'react'

export const BasketProvider = ({ children }) => {
  const [basketContents, dispatch] = useReducer(basketReducer, [])

  function basketReducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state, action.payload]
      default:
        throw new Error()
    }
  }

  return <BasketContext.Provider value={{ basketContents, dispatch }}>{children}</BasketContext.Provider>
}

export const BasketContext = createContext()

export default BasketProvider
