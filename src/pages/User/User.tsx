import { FC } from 'react';

import styles from './User.module.scss';

import { AccountBlock } from './AccountBlock/AccountBlock';

import { Route, Routes } from 'react-router-dom';
import { NavigationBlock } from './NavigationBlock/NavigationBlock';
import { OrderHistory } from './OrderHistory/OrderHistory';

export const User: FC = () => {
	return (
		<div className={styles.user}>
			<NavigationBlock />

			<div className={styles.content}>
				<Routes>
					<Route path='/' element={<AccountBlock />} />
					<Route path={'/orders'} element={<OrderHistory />} />
				</Routes>
			</div>
		</div>
	);
};
