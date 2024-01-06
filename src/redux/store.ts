import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cart.slice';
import productReducer from './product/product.slice';
import userReducer from './user/user.slice';

export const store = configureStore({
	reducer: {
		products: productReducer,
		user: userReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
