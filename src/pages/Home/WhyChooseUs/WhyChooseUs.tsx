import styles from './WhyChooseUs.module.scss';

import hoodieImage from '@/assets/home/hoodie.png';

import { FaHandsHelping } from 'react-icons/fa';
import { LuShoppingBag, LuTruck } from 'react-icons/lu';
import { SlSupport } from 'react-icons/sl';

export const WhyChooseUs = () => {
	return (
		<div id='whychooseus' className={styles.content}>
			<div className={styles.description}>
				<div className={styles.section}>
					<h1>Why Choose Us</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
						quas! Illo odit excepturi dolorum?
					</p>
				</div>

				<div className={styles.blocks}>
					<div className={styles.block}>
						<span className={styles.icon}>
							<LuTruck />
						</span>

						<h3>Fast & Free shiping</h3>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
							inventore!
						</p>
					</div>

					<div className={styles.block}>
						<span className={styles.icon}>
							<LuShoppingBag />
						</span>

						<h3>Easy to shop</h3>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
							inventore!
						</p>
					</div>

					<div className={styles.block}>
						<span className={styles.icon}>
							<SlSupport />
						</span>

						<h3>Hassle Free Returns</h3>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
							inventore!
						</p>
					</div>

					<div className={styles.block}>
						<span className={styles.icon}>
							<FaHandsHelping color={'#222831'} />
						</span>

						<h3>24/7 Support</h3>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
							inventore!
						</p>
					</div>
				</div>
			</div>

			<img src={hoodieImage} alt='hoodie' />
		</div>
	);
};
