import { FC, useEffect } from 'react';

import styles from './App.module.scss';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchAuthMe } from '@/redux/user/user.action';
import { AppRoute } from '@/routes/AppRoute';
import { BrowserRouter } from 'react-router-dom';

export const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (
			window.localStorage.getItem('token') ||
			window.sessionStorage.getItem('token')
		)
			dispatch(fetchAuthMe());
	}, []);

	return (
		<BrowserRouter>
			<div className={styles.application}>
				<div>
					<Header />

					<AppRoute />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};
