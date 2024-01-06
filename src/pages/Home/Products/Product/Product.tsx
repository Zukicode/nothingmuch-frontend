import { FC, useEffect } from 'react';

import styles from './Product.module.scss';

import { IoBagOutline } from 'react-icons/io5';

import { IProduct } from '@/models/IProduct';
import { useNavigate, useParams } from 'react-router-dom';

export const Product: FC<IProduct> = ({
	sizes,
	price,
	title,
	_id,
	availability,
	descripiton,
	images,
	quantity,
}) => {
	const navigate = useNavigate();
	const params = useParams();

	const redirectToProductPage = () => navigate(`/product/${_id}`);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [params.id]);

	return (
		<div onClick={redirectToProductPage} className={styles.product}>
			<div className={styles.image}>
				<img src={images[0].base64} alt='hoodie' />
			</div>

			<div className={styles.description}>
				<div className={styles.text}>
					<h1>{title}</h1>
					<div className={styles.sizes}>
						{sizes.map(size => (
							<p key={size}>{size}</p>
						))}
					</div>

					<p>${price}</p>
				</div>

				<button>
					<IoBagOutline />
				</button>
			</div>
		</div>
	);
};
