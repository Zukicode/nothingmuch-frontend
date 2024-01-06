import { IProduct } from '@/models/IProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchProducts = createAsyncThunk<
	IProduct[],
	undefined,
	{ rejectValue: string }
>('product/fetchProducts', async _ => {
	const { data } = await axios.get('http://localhost:4444/products');

	return data;
});
