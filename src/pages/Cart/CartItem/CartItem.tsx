import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';

import styles from './CartItem.module.scss';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { IProduct } from '@/models/IProduct';
import { changeQuantity, removeFromCart } from '@/redux/cart/cart.slice';
import { FC } from 'react';

interface CartItemProps extends IProduct {
	currentSize: number;
	localId: Date;
}

export const CartItem: FC<CartItemProps> = ({
	currentSize,
	localId,
	title,
	images,
	quantity,
}) => {
	const dispatch = useAppDispatch();

	const deleteFromCart = () => dispatch(removeFromCart(localId));

	const handleChangeQuntity = (isAdd: boolean) => {
		if (isAdd) {
			const newQuantity = quantity + 1;

			if (quantity >= 10) return;

			dispatch(changeQuantity({ localId, newQuantity }));
		} else {
			const newQuantity = quantity - 1;

			if (quantity > 1) {
				dispatch(changeQuantity({ localId, newQuantity }));
			}
		}
	};

	return (
		<div className={styles.item}>
			<div className={styles.title}>
				<img src={images[0].base64} alt='hoodie' />

				<div className={styles.text}>
					<h1>{title}</h1>
					<p>
						Size: <span>{currentSize}</span>
					</p>
				</div>
			</div>

			<div className={styles.func}>
				<div className={styles.quantity}>
					<button onClick={() => handleChangeQuntity(false)}>
						<FaMinus />
					</button>
					<p>{quantity}</p>
					<button onClick={() => handleChangeQuntity(true)}>
						<FaPlus />
					</button>
				</div>

				<p className={styles.price}>$100.00</p>

				<button onClick={deleteFromCart} className={styles.remove}>
					<FaRegTrashAlt />
				</button>
			</div>
		</div>
	);
};
