import { FC, useState } from 'react';

import styles from './Cart.module.scss';

import { useAuth } from '@/hooks/useAuth';
import { LOGIN_ROUTE } from '@/routes/routes';
import { useNavigate } from 'react-router-dom';
import { BillingCart } from './BillingCart/BillingCart';
import { ProductsCart } from './ProductsCart/ProductsCart';

export const Cart: FC = () => {
	const { isAuth } = useAuth();

	const navigate = useNavigate();

	const [isCheckout, setCheckout] = useState<boolean>(false);

	const handleClick = () => {
		if (!isAuth) return navigate(LOGIN_ROUTE);

		if (isCheckout) {
			console.log(isCheckout);
		} else {
			setCheckout(true);
		}
	};

	return (
		<div className={styles.cart}>
			{isCheckout ? <BillingCart /> : <ProductsCart />}

			<div className={styles.total}>
				<h1>Cart total</h1>
				<div className={styles.divider} />

				<div className={styles.shipping}>
					<p>Shipping</p>
					<h3>Free</h3>
				</div>

				<div className={styles.totalPrice}>
					<p>TOTAL</p>
					<h3>$100.00</h3>
				</div>

				{isCheckout && (
					<div className={styles.paymentMethod}>
						<h1>Payment method</h1>

						<div className={styles.paymentList}>
							<div className={`${styles.paymentItem} ${styles.active}`}>
								<div className={styles.check}>
									<div className={styles.checkCircle} />
								</div>
								<p>Cash on delivery</p>
							</div>

							<div className={styles.paymentItem}>
								<div className={styles.check}>
									<div className={styles.checkCircle} />
								</div>
								<p>Paypal</p>
							</div>
						</div>
					</div>
				)}

				<button onClick={handleClick}>
					{isCheckout ? 'Place order' : 'Procced to Checkout'}
				</button>
			</div>
		</div>
	);
};
