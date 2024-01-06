import { createSlice } from '@reduxjs/toolkit';

import { IProduct } from '@/models/IProduct';

export interface CartState {
	items: IProduct[];
}

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const index = state.items.findIndex(
				product =>
					product._id === action.payload._id &&
					product.currentSize === action.payload.currentSize
			);

			if (state.items[index] !== undefined) {
				state.items[index].quantity = state.items[index].quantity + 1;
			} else {
				state.items.push(action.payload);
			}
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter(
				product => product.localId !== action.payload
			);
		},
		changeQuantity: (state, action) => {
			const index = state.items.findIndex(
				product => product.localId === action.payload.localId
			);

			state.items[index].quantity = action.payload.newQuantity;
		},
	},
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
