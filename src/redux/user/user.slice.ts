import { IUser } from '@/models/IUser';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAuthLogin, fetchAuthMe, fetchAuthRegister } from './user.action';

export interface UserState {
	status: 'loading' | 'success' | 'rejected';
	data: null | IUser;
}

const initialState: UserState = {
	status: 'loading',
	data: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: state => {
			state.data = null;
			window.localStorage.removeItem('token');
			window.sessionStorage.removeItem('token');
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAuthLogin.pending, function (state) {
				state.data = null;
				state.status = 'loading';
			})
			.addCase(
				fetchAuthLogin.fulfilled,
				(state, action: PayloadAction<IUser>) => {
					state.data = action.payload;
					state.status = 'success';
				}
			)
			.addCase(fetchAuthLogin.rejected, state => {
				state.status = 'rejected';
				state.data = null;
			});

		builder
			.addCase(fetchAuthRegister.pending, function (state) {
				state.data = null;
				state.status = 'loading';
			})
			.addCase(
				fetchAuthRegister.fulfilled,
				(state, action: PayloadAction<IUser>) => {
					state.data = action.payload;
					state.status = 'success';
				}
			)
			.addCase(fetchAuthRegister.rejected, state => {
				state.status = 'rejected';
				state.data = null;
			});

		builder
			.addCase(fetchAuthMe.pending, function (state) {
				state.data = null;
				state.status = 'loading';
			})
			.addCase(fetchAuthMe.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.data = action.payload;
				state.status = 'success';
			})
			.addCase(fetchAuthMe.rejected, state => {
				state.status = 'rejected';
				state.data = null;
			});
	},
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
