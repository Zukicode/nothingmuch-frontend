import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '@/config/axios.ts';

import { IUser } from '@/models/IUser';

export const fetchAuthLogin = createAsyncThunk<
	IUser,
	undefined,
	{ rejectValue: any }
>('user/fetchAuthLogin', async params => {
	const { data } = await axios.post('/auth/login', params);

	return data;
});

export const fetchAuthRegister = createAsyncThunk<
	IUser,
	undefined,
	{ rejectValue: any }
>('user/fetchAuthRegister', async params => {
	const { data } = await axios.post('/auth/register', params);

	return data;
});

export const fetchAuthMe = createAsyncThunk<
	IUser,
	undefined,
	{ rejectValue: any }
>('user/fetchAuthMe', async () => {
	const { data } = await axios.get('/auth/me');

	return data;
});
