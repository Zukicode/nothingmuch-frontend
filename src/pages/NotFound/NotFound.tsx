import { FC } from 'react';

import styles from './NotFound.module.scss';

import { useNavigate } from 'react-router-dom';

import hoodie from '@/assets/home/hoodie.png';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { HOME_ROUTE } from '@/routes/routes';

export const NotFound: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.notFound}>
			<img src={hoodie} alt='hoodie' />

			<div className={styles.text}>
				<h1>Error 404!</h1>
				<p>
					This page could not be found on our website, please try reloading or
					return to the main page!
				</p>

				<button onClick={() => navigate(HOME_ROUTE)}>
					<IoIosArrowRoundBack /> Back to home
				</button>
			</div>
		</div>
	);
};
