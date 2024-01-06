import { FC } from 'react';

import styles from './Header.module.scss';

import logo from '@/assets/logo.svg';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import {
	CART_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	USER_ROUTE,
} from '@/routes/routes';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
	const { isAuth } = useAuth();

	const { items } = useAppSelector(state => state.cart);

	const navigate = useNavigate();

	const redirectTo = () =>
		isAuth ? navigate(USER_ROUTE) : navigate(LOGIN_ROUTE);

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img onClick={() => navigate(HOME_ROUTE)} src={logo} alt='logo' />
			</div>

			<div className={styles.user}>
				<div onClick={() => navigate(CART_ROUTE)} className={styles.cartIcon}>
					<FaShoppingCart size={24} color={'#30475e'} />
					<div className={styles.quantity}>{items.length}</div>
				</div>
				<div onClick={redirectTo} className={styles.profileIcon}>
					<FaUser size={24} color={'#30475e'} />
				</div>
			</div>
		</div>
	);
};
