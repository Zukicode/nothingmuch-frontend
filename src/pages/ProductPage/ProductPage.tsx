import { FC, useEffect, useState } from 'react';

import styles from './ProductPage.module.scss';

import { Products } from '../Home/Products/Products';

import { useParams } from 'react-router-dom';

import { Loader } from '@/components/Loader/Loader';
import axios from '@/config/axios.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { IProduct } from '@/models/IProduct';
import { addToCart } from '@/redux/cart/cart.slice';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from 'react-icons/md';

export const ProductPage: FC = () => {
	const { id } = useParams();

	const dispatch = useAppDispatch();

	const [productData, setProductData] = useState<IProduct | null>();
	const [activeImage, setActiveImage] = useState<number>(0);
	const [activeSize, setActiveSize] = useState<string>('M');
	const [quantity, setQuantity] = useState<number>(1);

	const handleChangeImage = (index: number) => setActiveImage(index);
	const handleChangeSize = (index: string) => setActiveSize(index);

	const handleChangeQuntity = (isAdd: boolean) => {
		if (isAdd) {
			if (quantity >= 10) return;
			setQuantity(quantity + 1);
		} else {
			if (quantity > 1) {
				setQuantity(quantity - 1);
			}
		}
	};

	const addToBag = () => {
		console.log(productData);

		dispatch(
			addToCart({
				localId: Date.now(),
				...productData,
				quantity,
				currentSize: activeSize,
			})
		);
	};

	const getOneProduct = async () => {
		const { data } = await axios.get(`http://localhost:4444/products/${id}`);

		console.log(data);

		setProductData(data);
	};

	useEffect(() => {
		getOneProduct();
	}, [id]);

	if (!productData) {
		return <Loader />;
	}

	return (
		<div className={styles.product}>
			<div className={styles.block}>
				<div className={styles.image}>
					<img
						src={productData.images[activeImage].base64}
						alt='hoodie'
						className={styles.current}
					/>

					<div className={styles.chooseCurrentHoodie}>
						{productData.images.map((img, i) => (
							<img
								onClick={() => handleChangeImage(i)}
								src={img.base64}
								alt='hoodie'
								className={activeImage === i ? styles.active : ''}
								key={i}
							/>
						))}
					</div>
				</div>

				<div className={styles.description}>
					<div className={styles.title}>
						<h3>NOTHINGMUCH</h3>

						<h1>{productData.title}</h1>
					</div>

					<p className={styles.info}>
						{productData.descripiton
							? productData.descripiton
							: 'Best hoodie ever you see!'}
					</p>

					<div className={styles.sizes}>
						<h3>Sizes</h3>

						<div className={styles.sizeList}>
							{productData.sizes.map(size => (
								<p
									key={size}
									className={activeSize === size ? styles.active : ''}
									onClick={() => handleChangeSize(size)}
								>
									{size}
								</p>
							))}
						</div>
					</div>

					<div className={styles.divider}></div>

					<h1 className={styles.price}>${productData.price}</h1>

					<div className={styles.addToCart}>
						<div className={styles.quantity}>
							<button onClick={() => handleChangeQuntity(false)}>
								<FaMinus />
							</button>
							<p>{quantity}</p>
							<button onClick={() => handleChangeQuntity(true)}>
								<FaPlus />
							</button>
						</div>

						<button onClick={addToBag} className={styles.add}>
							<MdOutlineShoppingCart />
							Add to cart
						</button>
					</div>
				</div>
			</div>

			<Products />
		</div>
	);
};
