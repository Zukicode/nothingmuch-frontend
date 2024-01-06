import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
	const user = useAppSelector(state => state.user);

	return user.data
		? {
				isAuth: true,
				...user.data,
		  }
		: { isAuth: false };
};
