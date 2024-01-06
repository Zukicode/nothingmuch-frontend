import { FC, useEffect } from 'react';

import styles from './Products.module.scss';

import { Product } from './Product/Product';

import { Loader } from '@/components/Loader/Loader';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fetchProducts } from '@/redux/product/product.action';

export const Products: FC = () => {
	const dispatch = useAppDispatch();
	const { items, isLoading } = useAppSelector(state => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	if (items.length === 0 && isLoading === 'loading') {
		return <Loader />;
	}

	return (
		<div className={styles.products}>
			<div className={styles.productsList}>
				{items.map(product => (
					<Product key={product.title} {...product} />
				))}
			</div>
		</div>
	);
};
