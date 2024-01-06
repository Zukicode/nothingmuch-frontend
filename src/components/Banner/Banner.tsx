import { FC } from 'react';

import styles from './Banner.module.scss';

import bannerImage from '@/assets/banner/banner-photo.png';

export const Banner: FC = () => {
	const toAboutUs = () => {
		const target = document.querySelector('#whychooseus');

		if (target) target.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className={styles.banner}>
			<div className={styles.bgEffectLeft}></div>
			<div className={styles.bgEffectRight}></div>

			<div className={styles.content}>
				<img src={bannerImage} alt='bannerHoodie' />

				<div className={styles.text}>
					<div className={styles.section}>
						<h1>Best hoodie here!</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit, repudiandae?
						</p>
					</div>

					<button onClick={toAboutUs}>About us</button>
				</div>
			</div>
		</div>
	);
};
