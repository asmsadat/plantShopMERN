import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productsAPI from './features/products/productAPI'
import ordersApi from './features/orders/ordersAPI'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware, ordersApi.middleware),
})