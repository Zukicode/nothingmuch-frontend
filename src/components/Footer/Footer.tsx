import { FC } from 'react';

import styles from './Footer.module.scss';

import logo from '@/assets/logo-white.svg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<img src={logo} alt='logo' />
				</div>

				<div className={styles.media}>
					<p>@ All right saved 2023.</p>

					<button>
						<FaInstagram />
					</button>
					<button>
						<FaFacebookF />
					</button>
				</div>
			</div>
		</div>
	);
};
