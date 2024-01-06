import { IProduct } from '@/models/IProduct';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './product.action';

export interface ProductState {
	items: IProduct[];
	status: 'loading' | 'success' | 'rejected';
}

const initialState: ProductState = {
	items: [],
	status: 'loading',
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, function (state) {
				state.items = [];
				state.status = 'loading';
			})
			.addCase(
				fetchProducts.fulfilled,
				(state, action: PayloadAction<IProduct[]>) => {
					state.items = action.payload;
					state.status = 'success';
				}
			)
			.addCase(fetchProducts.rejected, state => {
				state.status = 'rejected';
				state.items = [];
			});
	},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
