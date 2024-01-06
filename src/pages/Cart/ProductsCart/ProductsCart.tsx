import { FC } from 'react';

import styles from './ProductsCart.module.scss';

import { useAppSelector } from '@/hooks/useAppSelector';
import { CartItem } from '../CartItem/CartItem';

export const ProductsCart: FC = () => {
	const { items } = useAppSelector(state => state.cart);

	return (
		<div className={styles.products}>
			{items.length ? (
				<div className={styles.title}>
					<h1>Cart</h1>

					<p>{items.length} ITEMS</p>
				</div>
			) : (
				''
			)}

			<div className={styles.listOfProduct}>
				{items.length ? (
					items.map(item => <CartItem key={item.localId} {...item} />)
				) : (
					<div className={styles.noProducts}>
						<h1>You have not added any products!</h1>
						<p>
							To add a product to your cart, you need to go to the page with the
							product page, select the size and click the add to cart button.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
