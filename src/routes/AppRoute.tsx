import { Cart } from '@/pages/Cart/Cart';
import { Home } from '@/pages/Home/Home';
import { Login } from '@/pages/Login/Login';
import { ProductPage } from '@/pages/ProductPage/ProductPage';
import { Register } from '@/pages/Register/Register';
import { User } from '@/pages/User/User';

import {
	CART_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PRODUCT_ROUTE,
	REGISTER_ROUTE,
	USER_ROUTE,
} from './routes';

import { useAuth } from '@/hooks/useAuth';
import { NotFound } from '@/pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

export const AppRoute = () => {
	const { isAuth } = useAuth();

	return isAuth ? (
		<Routes>
			<Route path={HOME_ROUTE} element={<Home />} />
			<Route path={PRODUCT_ROUTE} element={<ProductPage />} />
			<Route path={LOGIN_ROUTE} element={<Login />} />
			<Route path={REGISTER_ROUTE} element={<Register />} />
			<Route path={CART_ROUTE} element={<Cart />} />
			<Route path={USER_ROUTE} element={<User />} />
			<Route path={`${USER_ROUTE}/*`} element={<User />} />
			<Route path={`*`} element={<NotFound />} />
		</Routes>
	) : (
		<Routes>
			<Route path={HOME_ROUTE} element={<Home />} />
			<Route path={PRODUCT_ROUTE} element={<ProductPage />} />
			<Route path={LOGIN_ROUTE} element={<Login />} />
			<Route path={REGISTER_ROUTE} element={<Register />} />
			<Route path={CART_ROUTE} element={<Cart />} />
			<Route path={`*`} element={<NotFound />} />
		</Routes>
	);
};
